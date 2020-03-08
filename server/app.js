var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoConnect = require('./schemas');

//schedule
const domesticStatusSchedule = require('./schedule/domesticStatus');
const domesticStatusByCitySchedule = require('./schedule/domesticStatusByCity');

//router
var domesticStatusRouter = require('./routes/domesticStatus');
var domesticStatusByCityRouter = require('./routes/domesticStatusByCity');

var app = express();

mongoConnect();
// domesticStatusSchedule();
domesticStatusByCitySchedule();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/domesticStatus', domesticStatusRouter);
app.use('/domesticStatusByCity', domesticStatusByCityRouter);

// 400 error
app.use(function(req, res, next) {
  next(createError(404));
});

// 500 error
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
