const schedule = require('node-schedule');
const axios = require('axios');
const GlobalStatus = require('../schemas/globalStatus');
const logger = require('../logger');
const moment = require('moment');
const puppeteer = require('puppeteer');
moment.tz.setDefault('Asia/Seoul');

module.exports = () => {
  schedule.scheduleJob('*/30 * * * *', function() {
    try {
      (async () => {
        const browser = await puppeteer.launch(/* { headless: false, args: ['--no-sandbox', '--disable-setuid-sandbox'] } */);
        const page = await browser.newPage();
        await page.goto('https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6');
        await page.waitForSelector('h5');
        const result = await page.evaluate(() => {
          const hTags = document.querySelectorAll('h5');
          result = {};
          for (let i = 0; i < hTags.length; i++) {
            let number = hTags[i].children[0].children[0].textContent.replace(/[^0-9]/g, '');
            let country = hTags[i].children[2].textContent;
            result[country] = number;
          }
          return result;
        });
        await browser.close();
        console.log(result);

        //   const globalStatus = new GlobalStatus({
        //     confirmator: result.confirmator,
        //     isolate: result.isolate,
        //     dead: result.dead,
        //     date: moment().format('YYYY-MM-DD HH:mm:ss')
        //   });
        //   globalStatus
        //     .save()
        //     .then(result => {
        //       logger.info('globalStatus DB 저장');
        //       logger.info(result);
        //     })
        //     .catch(error => {
        //       logger.error('globalStatus DB 저장실패');
        //       logger.error(error);
        //     });
      })();
    } catch (err) {
      logger.error(err);
    }
  });
};
