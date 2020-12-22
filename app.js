var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');
const dbConfig = require('./config/config');
const mongoose = require('mongoose');
const userRouter = require('./controllers/user.controller');
const authRouter = require('./controllers/auth.controller');
const bassinRouter = require('./controllers/bassin.controller');
const moteurRouter = require('./controllers/moteur.controller');
const champRouter = require('./controllers/champ.controller');
const sondageRouter = require('./controllers/sondage.controller');
const uploads = require('./controllers/uploads.controller');

var cors = require('cors');
var app = express();

// Connection to DataBase
mongoose.connect(dbConfig.url, { useNewUrlParser: true })
  .then(() => {
    console.log("Successfully connected to the database");
  }).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
  });


// Midleware
mongoose.set('useCreateIndex', true) // ?
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


//routing
app.use('/users', userRouter);
app.use('/auth', authRouter);
app.use('/champ', champRouter);
app.use('/bassin', bassinRouter);
app.use('/moteur', moteurRouter);
app.use('/sondage', sondageRouter);
app.use('/uploads', uploads);

//Cors
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.json({
    message: err.message,
    error: err
  });
  
});

module.exports = app;
