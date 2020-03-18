const schedule = require('node-schedule');
const axios = require('axios');
const cheerio = require('cheerio');
const DomesticStatusByCity = require('../schemas/domesticStatusByCity');
const logger = require('../logger');
const moment = require('moment');
moment.tz.setDefault('Asia/Seoul');

module.exports = () => {
  schedule.scheduleJob('*/30 * * * *', function() {
    const getHtml = async () => {
      try {
        return await axios.get('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=');
      } catch (error) {
        logger.error(error);
      }
    };
    getHtml().then(html => {
      const $ = cheerio.load(html.data);
      const tdTags = $("td[header='status_con s_type1']");
      const tdTags2 = $("td[header='status_con s_type4']");
      const tdTags3 = $("td[header='status_con s_type2']");

      const seoul = {
        confirmator: tdTags.eq(1).text(),
        isolate: tdTags2.eq(1).text(),
        dead: tdTags3.eq(1).text(),
        increase: tdTags
          .eq(1)
          .prev()
          .text()
      };
      const busan = {
        confirmator: tdTags.eq(2).text(),
        isolate: tdTags2.eq(2).text(),
        dead: tdTags3.eq(2).text(),
        increase: tdTags
          .eq(2)
          .prev()
          .text()
      };
      const deagu = {
        confirmator: tdTags.eq(3).text(),
        isolate: tdTags2.eq(3).text(),
        dead: tdTags3.eq(3).text(),
        increase: tdTags
          .eq(3)
          .prev()
          .text()
      };
      const incheon = {
        confirmator: tdTags.eq(4).text(),
        isolate: tdTags2.eq(4).text(),
        dead: tdTags3.eq(4).text(),
        increase: tdTags
          .eq(4)
          .prev()
          .text()
      };
      const gwangju = {
        confirmator: tdTags.eq(5).text(),
        isolate: tdTags2.eq(5).text(),
        dead: tdTags3.eq(5).text(),
        increase: tdTags
          .eq(5)
          .prev()
          .text()
      };
      const daejeon = {
        confirmator: tdTags.eq(6).text(),
        isolate: tdTags2.eq(6).text(),
        dead: tdTags3.eq(6).text(),
        increase: tdTags
          .eq(6)
          .prev()
          .text()
      };
      const ulsan = {
        confirmator: tdTags.eq(7).text(),
        isolate: tdTags2.eq(7).text(),
        dead: tdTags3.eq(7).text(),
        increase: tdTags
          .eq(7)
          .prev()
          .text()
      };
      const sejong = {
        confirmator: tdTags.eq(8).text(),
        isolate: tdTags2.eq(8).text(),
        dead: tdTags3.eq(8).text(),
        increase: tdTags
          .eq(8)
          .prev()
          .text()
      };
      const gyeonggi = {
        confirmator: tdTags.eq(9).text(),
        isolate: tdTags2.eq(9).text(),
        dead: tdTags3.eq(9).text(),
        increase: tdTags
          .eq(9)
          .prev()
          .text()
      };
      const gangwon = {
        confirmator: tdTags.eq(10).text(),
        isolate: tdTags2.eq(10).text(),
        dead: tdTags3.eq(10).text(),
        increase: tdTags
          .eq(10)
          .prev()
          .text()
      };
      const chungbuk = {
        confirmator: tdTags.eq(11).text(),
        isolate: tdTags2.eq(11).text(),
        dead: tdTags3.eq(11).text(),
        increase: tdTags
          .eq(11)
          .prev()
          .text()
      };
      const chungnam = {
        confirmator: tdTags.eq(12).text(),
        isolate: tdTags2.eq(12).text(),
        dead: tdTags3.eq(12).text(),
        increase: tdTags
          .eq(12)
          .prev()
          .text()
      };
      const jeonbuk = {
        confirmator: tdTags.eq(13).text(),
        isolate: tdTags2.eq(13).text(),
        dead: tdTags3.eq(13).text(),
        increase: tdTags
          .eq(13)
          .prev()
          .text()
      };
      const jeonnam = {
        confirmator: tdTags.eq(14).text(),
        isolate: tdTags2.eq(14).text(),
        dead: tdTags3.eq(14).text(),
        increase: tdTags
          .eq(14)
          .prev()
          .text()
      };
      const gyeongbuk = {
        confirmator: tdTags.eq(15).text(),
        isolate: tdTags2.eq(15).text(),
        dead: tdTags3.eq(15).text(),
        increase: tdTags
          .eq(15)
          .prev()
          .text()
      };
      const gyeongnam = {
        confirmator: tdTags.eq(16).text(),
        isolate: tdTags2.eq(16).text(),
        dead: tdTags3.eq(16).text(),
        increase: tdTags
          .eq(16)
          .prev()
          .text()
      };
      const jeju = {
        confirmator: tdTags.eq(17).text(),
        isolate: tdTags2.eq(17).text(),
        dead: tdTags3.eq(17).text(),
        increase: tdTags
          .eq(17)
          .prev()
          .text()
      };

      const domesticStatusByCity = new DomesticStatusByCity({
        seoul,
        busan,
        deagu,
        incheon,
        gwangju,
        daejeon,
        ulsan,
        sejong,
        gyeonggi,
        gangwon,
        chungbuk,
        chungnam,
        jeonbuk,
        jeonnam,
        gyeongbuk,
        gyeongnam,
        jeju,
        date: moment().format('YYYY-MM-DD HH:mm:ss')
      });

      domesticStatusByCity
        .save()
        .then(result => {
          logger.info('domesticStatusByCity DB 저장');
          logger.info(result);
        })
        .catch(error => {
          logger.log('domesticStatusByCity DB 저장실패');
          logger.error(error);
        });
    });
  });
};
