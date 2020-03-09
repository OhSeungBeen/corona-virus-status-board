var express = require('express');
var router = express.Router();
const DomesticStatus = require('../schemas/domesticStatus');

router.get('/', function(req, res, next) {
  DomesticStatus.find()
    .sort({ date: 'desc' })
    .limit(1)
    .then(result => {
      res.json(result);
    });
});

module.exports = router;
