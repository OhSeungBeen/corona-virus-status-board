const schedule = require('node-schedule');
const axios = require('axios');
const cheerio = require('cheerio');
const DomesticStatusByCity = require('../schemas/domesticStatusByCity');

module.exports = () => {
  schedule.scheduleJob('* */30 * * * *', function() {
    console.log('domesticStatusByCity crolling');
    const getHtml = async () => {
      try {
        return await axios.get('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=');
      } catch (error) {
        console.error(error);
      }
    };
    getHtml().then(html => {
      const $ = cheerio.load(html.data);
      const tdTags = $("td[header='status_con s_type1']");
      const domesticStatusByCity = new DomesticStatusByCity({
        seoul: tdTags.eq(1).text(),
        busan: tdTags.eq(2).text(),
        deagu: tdTags.eq(3).text(),
        incheon: tdTags.eq(4).text(),
        gwangju: tdTags.eq(5).text(),
        daejeon: tdTags.eq(6).text(),
        ulsan: tdTags.eq(7).text(),
        sejong: tdTags.eq(8).text(),
        gyeonggi: tdTags.eq(9).text(),
        gangwon: tdTags.eq(10).text(),
        chungbuk: tdTags.eq(11).text(),
        chungnam: tdTags.eq(12).text(),
        jeonbuk: tdTags.eq(13).text(),
        jeonnam: tdTags.eq(14).text(),
        gyeongbuk: tdTags.eq(15).text(),
        gyeongnam: tdTags.eq(16).text(),
        jeju: tdTags.eq(17).text()
      });

      domesticStatusByCity
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
