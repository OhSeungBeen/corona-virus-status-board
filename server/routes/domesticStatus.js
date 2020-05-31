var express = require('express');
var router = express.Router();
const DomesticStatus = require('../schemas/domesticStatus');
const DomesticStatusBySex = require('../schemas/domesticStatusBySex');
const DomesticStatusByAge = require('../schemas/domesticStatusByAge');
const schedule = require('node-schedule');
const moment = require('moment');
moment.tz.setDefault('Asia/Seoul');

router.get('/', async function (req, res, next) {
  let responseDailyStatus = [];
  for (i = 1; i >= 0; i--) {
    result = await getDailyData(i);
    responseDailyStatus.push(result[0]);
  }
  // 발표가 안된경우 오늘상태를지우고 상태하나를 추가한다.
  let todayStatus = await getDailyData(0);
  let tommorowStatus = await getDailyData(1);
  // 현재 confirmator만 확인하지만 object가 동등할경우로 수정해야된다.
  if (todayStatus[0].confirmator === tommorowStatus[0].confirmator) {
    responseDailyStatus.pop(0);
    addStatus = await getDailyData(2);
    responseDailyStatus.unshift(addStatus);
  }
  res.json(responseDailyStatus);
});

router.get('/dailyData/week', async function (req, res, next) {
  let responseDailyStatus = [];
  for (i = 7; i >= 0; i--) {
    result = await getDailyData(i);
    responseDailyStatus.push(result[0]);
  }
  // 발표가 안된경우 오늘상태를지우고 상태하나를 추가한다.
  let todayStatus = await getDailyData(0);
  let tommorowStatus = await getDailyData(1);
  // 현재 confirmator만 확인하지만 object가 동등할경우로 수정해야된다.
  if (todayStatus[0].confirmator === tommorowStatus[0].confirmator) {
    responseDailyStatus.pop(0);
    addStatus = await getDailyData(8);
    responseDailyStatus.unshift(addStatus);
  }
  res.json(responseDailyStatus);
});

async function getDailyData(day) {
  return await DomesticStatus.find({
    date: {
      $regex: '.*' + moment().subtract(day, 'days').format('YYYY-MM-DD') + '.*',
    },
  })
    .select({ _id: 0, __v: 0 })
    .sort({ date: -1 })
    .limit(1);
}

router.get('/sex', function (req, res, next) {
  DomesticStatusBySex.findOne()
    .select({ _id: 0, __v: 0 })
    .sort({ date: 'desc' })
    .limit(1)
    .then((result) => {
      res.json(result);
    });
});

router.get('/age', function (req, res, next) {
  DomesticStatusByAge.findOne()
    .select({ _id: 0, __v: 0 })
    .sort({ date: 'desc' })
    .limit(1)
    .then((result) => {
      res.json(result);
    });
});

module.exports = router;
