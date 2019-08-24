require('dotenv').config()

import createError from 'http-errors'
import express from 'express'
import cookieParser from 'cookie-parser'
import logger from 'morgan'
import path from 'path'

import loginRouter from './routes/login'
import mainRouter from './routes/main'
import detailairRouter from './routes/detailair'
import dataHistoryRouter from './routes/dataHistory'
import remoteControlRouter from './routes/remoteControl'
import modeControlRouter from './routes/modeControl'

const app = express()

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
app.use('/detailair', detailairRouter);
app.use('/modeControl', modeControlRouter);
app.use('/remoteControl', remoteControlRouter);
app.use('/dataHistory', dataHistoryRouter);


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
