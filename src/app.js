require('dotenv').config()

import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'

import loginRouter from './routes/login'
import mainRouter from './routes/main'
import aircleaner_Control_Router from './routes/control_Machine/aircleaner_Control'
import humidifier_Control_Router from './routes/control_Machine/humidifier_Control'
import airconditioner_Control_Router from './routes/control_Machine/airconditioner_Control'
import insert_DB_Router from './routes/insert_DB'
import detail_air_Router from './routes/detail_air'
import data_History_Router from './routes/data_history'
import remote_Control_Router from './routes/remote_Control'
import reservation_Control_Router from './routes/reservation_control'
import mode_Control_Router from './routes/mode_Control'
import aiSolution_Countrol_Router from './routes/aiSolution_Control'

const mongoose = require('mongoose');
const app = express();
const DB_SERVICE = require('./routes/db_connect.js');
//service DB Connect
DB_SERVICE();

//Inner DB find()
const DATA = require('./routes/Inner_sensor.js');

/*
const sensorSchema = new mongoose.Schema({
  id : String,
  temp: Number,
  humid : Number,
  pm2: Number,
  pm10: Number,
});
const Todo = DATA;

// DATA terminal display

Todo.find({ }, function(err, todo) {
  if(err) throw err;
  console.log(todo);
}).limit(3).sort({$natural:-1});
*/

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', loginRouter);
app.use('/main', mainRouter);
app.use('/insertdb', insert_DB_Router);
app.use('/detailair', detail_air_Router);
app.use('/modeControl', mode_Control_Router);
app.use('/remoteControl', remote_Control_Router);
app.use('/dataHistory', data_History_Router);
app.use('/aircleanercontrol', aircleaner_Control_Router);
app.use('/airconditionercontrol', airconditioner_Control_Router);
app.use('/humidifiercontrol', humidifier_Control_Router);
app.use('/aiSolutionControl', aiSolution_Countrol_Router);
app.use('/reservationcontrol', reservation_Control_Router);


// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use( (err, req, res, next) =>  {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
