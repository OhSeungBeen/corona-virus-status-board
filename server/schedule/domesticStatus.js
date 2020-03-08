const schedule = require('node-schedule');
const axios = require('axios');
const cheerio = require('cheerio');
const DomesticStatus = require('../schemas/domesticStatus');

module.exports = () => {
  var j = schedule.scheduleJob('*/5 * * * * *', function() {
    console.log('5초마다 실행됩니다.');

    const getHtml = async () => {
      try {
        return await axios.get('http://ncov.mohw.go.kr/bdBoardList_Real.do');
      } catch (error) {
        console.error(error);
      }
    };

    getHtml().then(html => {
      const $ = cheerio.load(html.data);
      const tdTags = $('.w_bold');

      const domesticStatus = new DomesticStatus({
        confirmator: tdTags
          .eq(0)
          .text()
          .replace(/[^0-9]/g, ''),
        isolate: tdTags
          .eq(1)
          .text()
          .replace(/[^0-9]/g, ''),
        dead: tdTags
          .eq(2)
          .text()
          .replace(/[^0-9]/g, ''),
        inspection: tdTags
          .eq(3)
          .text()
          .replace(/[^0-9]/g, '')
      });

      domesticStatus
        .save()
        .then(result => {
          console.log(result);
          console.log('domesticStatus save success');
        })
        .catch(error => {
          console.error(error);
        });
    });
  });
};
