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
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        await page.goto('https://www.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6');
        await page.waitForSelector('text[vector-effect="non-scaling-stroke"]');
        const result = await page.evaluate(() => {
          const tags = document.querySelectorAll('text[vector-effect="non-scaling-stroke"]');
          const confirmator = tags[1].textContent.trim().replace(/[^0-9]/g, '');
          const isolate = tags[7].textContent.trim().replace(/[^0-9]/g, '');
          const dead = tags[9].textContent.trim().replace(/[^0-9]/g, '');
          return { confirmator, isolate, dead };
        });
        await browser.close();

        const globalStatus = new GlobalStatus({
          confirmator: result.confirmator,
          isolate: result.isolate,
          dead: result.dead,
          date: moment().format('YYYY-MM-DD HH:mm:ss')
        });
        globalStatus
          .save()
          .then(result => {
            logger.info('globalStatus DB 저장');
            logger.info(result);
          })
          .catch(error => {
            logger.log('globalStatus DB 저장실패');
            logger.error(error);
          });

        logger.log(result);
      })();
    } catch (err) {
      logger.error(err);
    }
  });
};
