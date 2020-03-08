var express = require('express');
var router = express.Router();
const DomesticStatusCity = require('../schemas/domesticStatusByCity');

router.get('/', function(req, res, next) {
  DomesticStatusCity.find()
    .sort({ date: 'desc' })
    .limit(1)
    .then(result => {
      res.json(result);
    });
});

module.exports = router;
