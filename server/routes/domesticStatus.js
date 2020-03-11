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

module.exports = router;
