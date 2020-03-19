var express = require('express');
var router = express.Router();
const DomesticStatusCity = require('../schemas/domesticStatusByCity');

router.get('/', function(req, res, next) {
  DomesticStatusCity.find()
    .sort({ date: 'desc' })
    .limit(1)
    .select({ _id: 0, __v: 0, date: 0 })
    .then(result => {
      domesticStatusByCity = result[0].toObject();
      for (let city in domesticStatusByCity) {
        domesticStatusByCity[regionParse(city)] = {
          confirmator: domesticStatusByCity[city].get('confirmator'),
          isolate: domesticStatusByCity[city].get('isolate'),
          dead: domesticStatusByCity[city].get('dead'),
          increase: domesticStatusByCity[city].get('increase')
        };
        delete domesticStatusByCity[city];
      }
      res.json(domesticStatusByCity);
    });
});

router.get('/code', function(req, res, next) {
  DomesticStatusCity.find()
    .sort({ date: 'desc' })
    .limit(1)
    .select({ _id: 0, __v: 0, date: 0 })
    .then(result => {
      domesticStatusByCity = result[0].toObject();
      for (let city in domesticStatusByCity) {
        domesticStatusByCity[regionParse(city, 1)] = {
          confirmator: domesticStatusByCity[city].get('confirmator'),
          isolate: domesticStatusByCity[city].get('isolate'),
          dead: domesticStatusByCity[city].get('dead'),
          increase: domesticStatusByCity[city].get('increase')
        };
        delete domesticStatusByCity[city];
      }
      res.json(domesticStatusByCity);
    });
});

function regionParse(data, code) {
  const rigion = [
    ['seoul', '서울', 'KR-11,서울'],
    ['busan', '부산', 'KR-26,부산'],
    ['deagu', '대구', 'KR-27,대구'],
    ['incheon', '인천', 'KR-28,인천'],
    ['gwangju', '광주', 'KR-29,광주'],
    ['daejeon', '대전', 'KR-30,대전'],
    ['ulsan', '울산', 'KR-31,울산'],
    ['sejong', '세종', 'none,세종'],
    ['gyeonggi', '경기', 'KR-41,경기'],
    ['gangwon', '강원', 'KR-42,강원'],
    ['chungbuk', '충북', 'KR-43,충북'],
    ['chungnam', '충남', 'KR-44,충남'],
    ['jeonbuk', '전북', 'KR-45,전북'],
    ['jeonnam', '전남', 'KR-46,전남'],
    ['gyeongbuk', '경북', 'KR-47,경북'],
    ['gyeongnam', '경남', 'KR-48,경남'],
    ['jeju', '제주', 'KR-49,제주']
  ];
  for (let city of rigion) {
    if (city[0] == data) {
      if (code === 1) return city[2];
      return city[1];
    }
  }
}

module.exports = router;
