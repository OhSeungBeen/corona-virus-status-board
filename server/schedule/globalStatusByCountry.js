const schedule = require('node-schedule');
const logger = require('../logger');
const moment = require('moment');
const puppeteer = require('puppeteer');
moment.tz.setDefault('Asia/Seoul');
const GlobalStatusByCountry = require('../schemas/globalStatusByCountry');

module.exports = () => {
  schedule.scheduleJob('*/30 * * * *', function() {
    console.log('start');
    try {
      (async () => {
        const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
        const page = await browser.newPage();
        await page.goto('https://www.worldometers.info/coronavirus/');
        await page.waitForSelector('tr');
        const result = await page.evaluate(() => {
          const result = {};
          const trTags = document.querySelectorAll('#main_table_countries_today tr');
          for (trTag of trTags) {
            let country = trTag.children[0].textContent.trim().replace(/\.|\:/gi, '');
            const confirmator = Number(trTag.children[1].textContent.trim().replace(/[^0-9]/g, ''));
            let isolate = Number(trTag.children[5].textContent.trim().replace(/[^0-9]/g, ''));
            if (isolate === '') isolate = '0';
            let dead = Number(trTag.children[3].textContent.trim().replace(/[^0-9]/g, ''));
            if (dead === '') dead = '0';
            result[country] = {
              confirmator,
              isolate,
              dead
            };
          }
          delete result['Country,Other'];
          return result;
        });
        console.log(result);
        await browser.close();

        result.date = moment().format('YYYY-MM-DD HH:mm:ss');
        let globalStatusbyCountry = new GlobalStatusByCountry(result);
        globalStatusbyCountry
          .save()
          .then(result => {
            logger.info('globalStatusByCountry DB 저장');
            logger.info(result);
          })
          .catch(error => {
            logger.error('globalStatusByCountry DB 저장실패');
            logger.error(error);
          });
      })();
    } catch (err) {
      logger.error('globalStatusByCountry crolling || DB 저장실패');
      logger.error(err);
    }
  });
};
