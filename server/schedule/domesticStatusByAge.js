const schedule = require('node-schedule');
const axios = require('axios');
const cheerio = require('cheerio');
const DomesticStatusByAge = require('../schemas/domesticStatusByAge');
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
      const domesticStatusBySex = new DomesticStatusByAge({
        confirmator: {
          '0-9세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(9) > td:nth-child(2) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '10-19세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(8) > td:nth-child(2) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '20-29세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(7) > td:nth-child(2) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '30-39세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(6) > td:nth-child(2) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '40-49세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(5) > td:nth-child(2) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '50-59세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(4) > td:nth-child(2) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '60-69세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(3) > td:nth-child(2) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '70-79세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(2) > td:nth-child(2) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '80세 이상': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
        },
        dead: {
          '0-9세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(9) > td:nth-child(3) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '10-19세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(8) > td:nth-child(3) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '20-29세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(7) > td:nth-child(3) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '30-39세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(6) > td:nth-child(3) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '40-49세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(5) > td:nth-child(3) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '50-59세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(4) > td:nth-child(3) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '60-69세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(3) > td:nth-child(3) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '70-79세': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(2) > td:nth-child(3) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          '80세 이상': $('#content > div > div:nth-child(21) > table > tbody > tr:nth-child(1) > td:nth-child(3) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
        },
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
      });

      domesticStatusBySex
        .save()
        .then((result) => {
          logger.info('domesticStatusByAge DB 저장');
          logger.info(result);
        })
        .catch((error) => {
          logger.log('domesticStatusByAge DB 저장실패');
          logger.error(error);
        });
    });
  });
};
