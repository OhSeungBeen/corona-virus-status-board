var express = require('express');
var router = express.Router();
const DomesticStatusCity = require('../schemas/domesticStatusByCity');

router.get('/', function(req, res, next) {
  DomesticStatusCity.find()
    .sort({ date: 'desc' })
    .limit(1)
    .then(result => {
      let domesticStatusByCity = result[0].toObject();
      delete domesticStatusByCity._id;
      delete domesticStatusByCity.date;
      delete domesticStatusByCity.__v;
      for (let result in domesticStatusByCity) {
        domesticStatusByCity[regionParse(result)] = domesticStatusByCity[result];
        delete domesticStatusByCity[result];
      }
      res.json(domesticStatusByCity);
    });
});

function regionParse(data) {
  const rigion = [
    ['seoul', '서울'],
    ['busan', '부산'],
    ['deagu', '대구'],
    ['incheon', '인천'],
    ['gwangju', '광주'],
    ['daejeon', '대전'],
    ['ulsan', '울산'],
    ['sejong', '세종'],
    ['gyeonggi', '경기'],
    ['gangwon', '강원'],
    ['chungbuk', '충북'],
    ['chungnam', '충남'],
    ['jeonbuk', '전북'],
    ['jeonnam', '전남'],
    ['gyeongbuk', '경북'],
    ['gyeongnam', '경남'],
    ['jeju', '제주']
  ];
  for (let city of rigion) {
    if (city[0] == data) {
      return city[1];
    }
  }
}

module.exports = router;
