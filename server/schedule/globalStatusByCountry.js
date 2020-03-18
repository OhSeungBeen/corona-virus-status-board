const schedule = require('node-schedule');
const logger = require('../logger');
const moment = require('moment');
const puppeteer = require('puppeteer');
moment.tz.setDefault('Asia/Seoul');
const GlobalStatusByCountry = require('../schemas/globalStatusByCountry');

module.exports = () => {
  //  schedule.scheduleJob('*/30 * * * *', function() {
  try {
    (async () => {
      const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'] });
      const page = await browser.newPage();
      await page.goto('https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6');
      await page.waitForSelector('h5');
      const result = await page.evaluate(() => {
        const hTags = document.querySelectorAll('h5');
        result = {};
        for (let i = 0; i < hTags.length; i++) {
          let country = hTags[i].children[2].textContent;
          let confirmator = hTags[i].children[0].children[0].textContent.replace(/[^0-9]/g, '');
          result[country] = { confirmator };
        }

        return result;
      });
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
  //  });
};
