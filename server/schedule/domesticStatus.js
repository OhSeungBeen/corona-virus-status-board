const schedule = require('node-schedule');
const axios = require('axios');
const cheerio = require('cheerio');
const DomesticStatus = require('../schemas/domesticStatus');
const logger = require('../logger');
const moment = require('moment');
moment.tz.setDefault('Asia/Seoul');

module.exports = () => {
  var j = schedule.scheduleJob('*/30 * * * *', function () {
    const getHtml = async () => {
      try {
        return await axios.get('http://ncov.mohw.go.kr/bdBoardList_Real.do');
      } catch (error) {
        logger.error(error);
      }
    };
    getHtml().then((html) => {
      const $ = cheerio.load(html.data);
      console.log('');
      const domesticStatus = new DomesticStatus({
        confirmator: $('#content > div > div:nth-child(5) > table > tbody > tr > td:nth-child(1)')
          .text()
          .replace(/[^0-9]/g, ''),
        discharge: $('#content > div > div:nth-child(5) > table > tbody > tr > td:nth-child(2)')
          .text()
          .replace(/[^0-9]/g, ''),
        isolate: $('#content > div > div:nth-child(5) > table > tbody > tr > td:nth-child(3)')
          .text()
          .replace(/[^0-9]/g, ''),
        dead: $('#content > div > div:nth-child(5) > table > tbody > tr > td:nth-child(4)')
          .text()
          .replace(/[^0-9]/g, ''),
        inspectionNegative: $('#content > div > div.data_table.mgt16.mini > table > tbody > tr > td:nth-child(5)')
          .text()
          .replace(/[^0-9]/g, ''),
        inspection: $('#content > div > div.data_table.mgt16.mini > table > tbody > tr > td:nth-child(7)')
          .text()
          .replace(/[^0-9]/g, ''),
        inspectionSum: $('#content > div > div.data_table.mgt16.mini > table > tbody > tr > td:nth-child(8)')
          .text()
          .replace(/[^0-9]/g, ''),
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
      });

      domesticStatus
        .save()
        .then((result) => {
          logger.info('domesticStatus DB 저장');
          logger.info(result);
        })
        .catch((error) => {
          logger.log('domesticStatus DB 저장실패');
          logger.error(error);
        });
    });
  });
};
