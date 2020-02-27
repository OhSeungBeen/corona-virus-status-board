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
    domesticStatus.confirmator = $('.s_listin_dot').children().eq(0).text().replace(/[^0-9]/g,'');
    domesticStatus.isolate = $('.s_listin_dot').children().eq(1).text().replace(/[^0-9]/g,'');
    domesticStatus.dead = $('.s_listin_dot').children().eq(2).text().replace(/[^0-9]/g,'');
    domesticStatus.inspection = $('.s_listin_dot').children().eq(3).text().replace(/[^0-9]/g,'');
    res.json(domesticStatus);
  })
});

module.exports = router;

