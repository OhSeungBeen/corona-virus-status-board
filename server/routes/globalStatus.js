var express = require('express');
var router = express.Router();
const GlobalStatus = require('../schemas/globalStatus');

router.get('/', function(req, res, next) {
  GlobalStatus.find()
    .sort({ date: 'desc' })
    .limit(1)
    .then(result => {
      let globalStatus = result[0].toObject();
      delete globalStatus._id;
      delete globalStatus.__v;
      res.json(globalStatus);
    });
});

module.exports = router;
