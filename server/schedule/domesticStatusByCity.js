const schedule = require('node-schedule');
const axios = require('axios');
const cheerio = require('cheerio');
const DomesticStatusByCity = require('../schemas/domesticStatusByCity');
const logger = require('../logger');
const moment = require('moment');
moment.tz.setDefault('Asia/Seoul');

module.exports = () => {
  schedule.scheduleJob('*/30 * * * *', function () {
    const getHtml = async () => {
      try {
        return await axios.get('http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=');
      } catch (error) {
        logger.error(error);
      }
    };
    getHtml().then((html) => {
      const $ = cheerio.load(html.data);
      const tdTags = $("td[headers='status_con s_type1']");
      const tdTags2 = $("td[headers='status_con s_type2']");
      const tdTags3 = $("td[headers='status_con s_type3']");
      const tdTags4 = $("td[headers='status_con s_type4']");
      const tdTags5 = $("td[headers='status_level l_type1']");

      const seoul = {
        confirmator: tdTags.eq(1).text().replace(/,/, ''),
        isolate: tdTags2.eq(1).text().replace(/,/, ''),
        discharge: tdTags3.eq(1).text().replace(/,/, ''),
        dead: tdTags4.eq(1).text().replace(/,/, ''),
        increase: tdTags5.eq(1).text().replace(/,/, ''),
      };
      const busan = {
        confirmator: tdTags.eq(2).text().replace(/,/, ''),
        isolate: tdTags2.eq(2).text().replace(/,/, ''),
        discharge: tdTags3.eq(2).text().replace(/,/, ''),
        dead: tdTags4.eq(2).text().replace(/,/, ''),
        increase: tdTags5.eq(2).text().replace(/,/, ''),
      };
      const deagu = {
        confirmator: tdTags.eq(3).text().replace(/,/, ''),
        isolate: tdTags2.eq(3).text().replace(/,/, ''),
        discharge: tdTags3.eq(3).text().replace(/,/, ''),
        dead: tdTags4.eq(3).text().replace(/,/, ''),
        increase: tdTags5.eq(3).text().replace(/,/, ''),
      };
      const incheon = {
        confirmator: tdTags.eq(4).text().replace(/,/, ''),
        isolate: tdTags2.eq(4).text().replace(/,/, ''),
        discharge: tdTags3.eq(4).text().replace(/,/, ''),
        dead: tdTags4.eq(4).text().replace(/,/, ''),
        increase: tdTags5.eq(4).text().replace(/,/, ''),
      };
      const gwangju = {
        confirmator: tdTags.eq(5).text().replace(/,/, ''),
        isolate: tdTags2.eq(5).text().replace(/,/, ''),
        discharge: tdTags3.eq(5).text().replace(/,/, ''),
        dead: tdTags4.eq(5).text().replace(/,/, ''),
        increase: tdTags5.eq(5).text().replace(/,/, ''),
      };
      const daejeon = {
        confirmator: tdTags.eq(6).text().replace(/,/, ''),
        isolate: tdTags2.eq(6).text().replace(/,/, ''),
        discharge: tdTags3.eq(6).text().replace(/,/, ''),
        dead: tdTags4.eq(6).text().replace(/,/, ''),
        increase: tdTags5.eq(6).text().replace(/,/, ''),
      };
      const ulsan = {
        confirmator: tdTags.eq(7).text().replace(/,/, ''),
        isolate: tdTags2.eq(7).text().replace(/,/, ''),
        discharge: tdTags3.eq(7).text().replace(/,/, ''),
        dead: tdTags4.eq(7).text().replace(/,/, ''),
        increase: tdTags5.eq(7).text().replace(/,/, ''),
      };
      const sejong = {
        confirmator: tdTags.eq(8).text().replace(/,/, ''),
        isolate: tdTags2.eq(8).text().replace(/,/, ''),
        discharge: tdTags3.eq(8).text().replace(/,/, ''),
        dead: tdTags4.eq(8).text().replace(/,/, ''),
        increase: tdTags5.eq(8).text().replace(/,/, ''),
      };
      const gyeonggi = {
        confirmator: tdTags.eq(9).text().replace(/,/, ''),
        isolate: tdTags2.eq(9).text().replace(/,/, ''),
        discharge: tdTags3.eq(9).text().replace(/,/, ''),
        dead: tdTags4.eq(9).text().replace(/,/, ''),
        increase: tdTags5.eq(9).text().replace(/,/, ''),
      };
      const gangwon = {
        confirmator: tdTags.eq(10).text().replace(/,/, ''),
        isolate: tdTags2.eq(10).text().replace(/,/, ''),
        discharge: tdTags3.eq(10).text().replace(/,/, ''),
        dead: tdTags4.eq(10).text().replace(/,/, ''),
        increase: tdTags5.eq(10).text().replace(/,/, ''),
      };
      const chungbuk = {
        confirmator: tdTags.eq(11).text().replace(/,/, ''),
        isolate: tdTags2.eq(11).text().replace(/,/, ''),
        discharge: tdTags3.eq(11).text().replace(/,/, ''),
        dead: tdTags4.eq(11).text().replace(/,/, ''),
        increase: tdTags5.eq(11).text().replace(/,/, ''),
      };
      const chungnam = {
        confirmator: tdTags.eq(12).text().replace(/,/, ''),
        isolate: tdTags2.eq(12).text().replace(/,/, ''),
        discharge: tdTags3.eq(12).text().replace(/,/, ''),
        dead: tdTags4.eq(12).text().replace(/,/, ''),
        increase: tdTags5.eq(12).text().replace(/,/, ''),
      };
      const jeonbuk = {
        confirmator: tdTags.eq(13).text().replace(/,/, ''),
        isolate: tdTags2.eq(13).text().replace(/,/, ''),
        discharge: tdTags3.eq(13).text().replace(/,/, ''),
        dead: tdTags4.eq(13).text().replace(/,/, ''),
        increase: tdTags5.eq(13).text().replace(/,/, ''),
      };
      const jeonnam = {
        confirmator: tdTags.eq(14).text().replace(/,/, ''),
        isolate: tdTags2.eq(14).text().replace(/,/, ''),
        discharge: tdTags3.eq(14).text().replace(/,/, ''),
        dead: tdTags4.eq(14).text().replace(/,/, ''),
        increase: tdTags5.eq(14).text().replace(/,/, ''),
      };
      const gyeongbuk = {
        confirmator: tdTags.eq(15).text().replace(/,/, ''),
        isolate: tdTags2.eq(15).text().replace(/,/, ''),
        discharge: tdTags3.eq(15).text().replace(/,/, ''),
        dead: tdTags4.eq(15).text().replace(/,/, ''),
        increase: tdTags5.eq(15).text().replace(/,/, ''),
      };
      const gyeongnam = {
        confirmator: tdTags.eq(16).text().replace(/,/, ''),
        isolate: tdTags2.eq(16).text().replace(/,/, ''),
        discharge: tdTags3.eq(16).text().replace(/,/, ''),
        dead: tdTags4.eq(16).text().replace(/,/, ''),
        increase: tdTags5.eq(16).text().replace(/,/, ''),
      };
      const jeju = {
        confirmator: tdTags.eq(17).text().replace(/,/, ''),
        isolate: tdTags2.eq(17).text().replace(/,/, ''),
        discharge: tdTags3.eq(17).text().replace(/,/, ''),
        dead: tdTags4.eq(17).text().replace(/,/, ''),
        increase: tdTags5.eq(17).text().replace(/,/, ''),
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
        date: moment().format('YYYY-MM-DD HH:mm:ss'),
      });

      domesticStatusByCity
        .save()
        .then((result) => {
          logger.info('domesticStatusByCity DB 저장');
          logger.info(result);
        })
        .catch((error) => {
          logger.log('domesticStatusByCity DB 저장실패');
          logger.error(error);
        });
    });
  });
};
