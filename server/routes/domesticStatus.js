var express = require('express');
var router = express.Router();
const axios = require("axios");
const cheerio = require("cheerio");

router.get('/status', function(req, res, next) {
  
  const getHtml = async() => {
    try{
      return await axios.get("http://ncov.mohw.go.kr/bdBoardList_Real.do");
    } catch(error){
      console.log.error(error);
    }
  }

  getHtml().then(html =>{
    var domesticStatus ={};
    const $ = cheerio.load(html.data);
    domesticStatus.confirmator = $('.w_bold').eq(0).text();
    domesticStatus.isolate = $('.w_bold').eq(1).text()
    domesticStatus.dead = $('.w_bold').eq(2).text()
    domesticStatus.inspection = $('.w_bold').eq(3).text()
    res.json(domesticStatus);
  })
});

router.get('/statusByCity', function(req, res, next) {
  
  const getHtml = async() => {
    try{
      return await axios.get("http://ncov.mohw.go.kr/bdBoardList_Real.do?brdId=1&brdGubun=13&ncvContSeq=&contSeq=&board_id=&gubun=");
    } catch(error){
      console.log.error(error);
    }
  }

  getHtml().then(html =>{
    var domesticStatus = new Array();
    const $ = cheerio.load(html.data);
    var i = 1;
    while($("td[headers='status_con s_type1']").eq(i).text() != ""){
      if($("td[headers='status_con s_type1']").eq(i).text().trim() == "0"){
        i++
        continue;
      }
      var statusByCity = {};
      statusByCity.city = $("th[scope='row']").eq(i).text();
      statusByCity.numbers = Number($("td[headers='status_con s_type1']").eq(i).text().trim().replace(',',''));
      domesticStatus.push(statusByCity)
      i++;
    }
    domesticStatus.sort(function(a, b) {
      return b["numbers"] - a["numbers"];
  });
    res.json(domesticStatus);
  })
});

module.exports = router;

