var express = require('express');
var router = express.Router();
const GlobalStatus = require('../schemas/globalStatus');

router.get('/', function(req, res, next) {
  GlobalStatus.find()
    .sort({ date: 'desc' })
    .limit(1)
    .select({ _id: 0, __v: 0 })
    .then(result => {
      let globalStatus = result[0].toObject();
      res.json(globalStatus);
    });
});

module.exports = router;
