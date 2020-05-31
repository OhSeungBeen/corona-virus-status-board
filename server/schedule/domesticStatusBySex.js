const schedule = require('node-schedule');
const axios = require('axios');
const cheerio = require('cheerio');
const DomesticStatusBySex = require('../schemas/domesticStatusBySex');
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
      const domesticStatusBySex = new DomesticStatusBySex({
        man: {
          confirmator: $('#content > div > div:nth-child(18) > table > tbody > tr:nth-child(1) > td:nth-child(2) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          dead: $('#content > div > div:nth-child(18) > table > tbody > tr:nth-child(1) > td:nth-child(3) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
        },
        woman: {
          confirmator: $('#content > div > div:nth-child(18) > table > tbody > tr:nth-child(2) > td:nth-child(2) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
          dead: $('#content > div > div:nth-child(18) > table > tbody > tr:nth-child(2) > td:nth-child(3) > span:nth-child(1)')
            .text()
            .replace(/[^0-9]/g, ''),
        },
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
      });

      domesticStatusBySex
        .save()
        .then((result) => {
          logger.info('domesticStatusBySex DB 저장');
          logger.info(result);
        })
        .catch((error) => {
          logger.log('domesticStatusBySex DB 저장실패');
          logger.error(error);
        });
    });
  });
};
