var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var morgan = require('morgan');
const mongoConnect = require('./schemas');
const hpp = require('hpp');
const helmet = require('helmet');

//router
var domesticStatusRouter = require('./routes/domesticStatus');
var domesticStatusByCityRouter = require('./routes/domesticStatusByCity');
var globalStatusRouter = require('./routes/globalStatus');

var app = express();

mongoConnect();

//schedule
require('./schedule/domesticStatus')();
require('./schedule/domesticStatusByCity')();
require('./schedule/globalStatus')();
// require('./schedule/globalStatusbyCountry')();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV == 'production') {
  app.use(morgan('combined'));
  app.use(helmet());
  app.use(hpp());
} else {
  app.use(morgan('dev'));
}

const root = path.join(__dirname, 'public', 'build');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(root));
app.use('/domesticStatus', domesticStatusRouter);
app.use('/domesticStatusByCity', domesticStatusByCityRouter);
app.use('/globalStatus', globalStatusRouter);

app.get('*', (req, res) => {
  res.sendFile(path.join(root, 'index.html'));
});

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
