const schedule = require('node-schedule');
const axios = require('axios');
const cheerio = require('cheerio');
const DomesticStatus = require('../schemas/domesticStatus');
const moment = require('moment');
moment.tz.setDefault('Asia/Seoul');

module.exports = () => {
  var j = schedule.scheduleJob('*/30 * * * *', function() {
    const getHtml = async () => {
      try {
        return await axios.get('http://ncov.mohw.go.kr/bdBoardList_Real.do');
      } catch (error) {
        console.error(error);
      }
    };

    getHtml().then(html => {
      const $ = cheerio.load(html.data);
      const tags = $('td');

      const domesticStatus = new DomesticStatus({
        confirmator: tags
          .eq(0)
          .text()
          .replace(/[^0-9]/g, ''),
        isolate: tags
          .eq(1)
          .text()
          .replace(/[^0-9]/g, ''),
        dead: tags
          .eq(3)
          .text()
          .replace(/[^0-9]/g, ''),
        inspection: tags
          .eq(10)
          .text()
          .replace(/[^0-9]/g, ''),
        date: moment().format('YYYY-MM-DD HH:mm:ss')
      });

      domesticStatus
        .save()
        .then(result => {})
        .catch(error => {
          console.log('domesticStatus DB 저장실패');
          console.error(error);
        });
    });
  });
};
