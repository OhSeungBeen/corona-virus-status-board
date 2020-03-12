var express = require('express');
var router = express.Router();
const DomesticStatus = require('../schemas/domesticStatus');

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

router.get('/dailyData', function(req, res, next) {
  DomesticStatus.find({
    $or: [{ date: /00:00:00/ }, { date: /00:00:01/ }]
  })
    .select({ _id: 0, __v: 0 })
    .sort({ date: 'desc' })
    .limit(5)
    .then(result => {
      console.log(result);
      res.json(result);
    });
});

module.exports = router;
