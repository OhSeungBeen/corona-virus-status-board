var express = require('express');
var router = express.Router();
const DomesticStatus = require('../schemas/domesticStatus');
const schedule = require('node-schedule');
const moment = require('moment');
moment.tz.setDefault('Asia/Seoul');

router.get('/', function(req, res, next) {
  DomesticStatus.find()
    .sort({ date: 'desc' })
    .limit(1)
    .then(result => {
      let domesticStatus = result[0].toObject();
      delete domesticStatus._id;
      delete domesticStatus.__v;
      res.json(domesticStatus);
    });
});

router.get('/dailyData', async function(req, res, next) {
  let dailyData = [];
  for (i = 5; i >= 0; i--) {
    let result = await getDailyData(i);
    if (!result.length) {
      continue;
    }
    dailyData.push(result[0].toObject());
  }
  await res.json(dailyData);
});

async function getDailyData(day) {
  return await DomesticStatus.find({
    date: {
      $regex:
        '.*' +
        moment()
          .subtract(day, 'days')
          .format('YYYY-MM-DD') +
        '.*'
    }
  })
    .select({ _id: 0, __v: 0 })
    .sort({ date: -1 })
    .limit(1);
}

module.exports = router;
