import express from 'express'
import {data_history} from '../controllers/data_history.controller'

const router = express.Router()

const mongoose = require('mongoose');

const Inner_DATA = require('./Inner_sensor.js');


const Inner_Todo = Inner_DATA;
// DATA terminal display

var Inner = new Object();
/* GET home page. */
router.get('/', async (req, res, next) => {
    if (req.session.logined) {

        await Inner_Todo.find({}, { _id: 0 }, function (err, todo) {
            if (err) throw err;
            Inner = todo;
        }).limit(1).sort({ $natural: -1 });
        //res.json(Outer);
        var Inner_temp = JSON.stringify(Inner[0].temp);
        var Inner_humid = JSON.stringify(Inner[0].humid);
        var Inner_pm25 = JSON.stringify(Inner[0].pm25);
        var Inner_pm10 = JSON.stringify(Inner[0].pm10);
        var Inner_voc = JSON.stringify(Inner[0].voc);
        var Inner_co2 = JSON.stringify(Inner[0].co2);

        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth() + 1; //January is 0!
        var yyyy = today.getFullYear();
        var hour = today.getHours();
        var minute = today.getMinutes();
        if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
        if (hour < 10) {
            hour = '0' + hour;
        }
        if (minute < 10) {
            minute = '0' + minute;
        }


        var ttime = Number(hour * 60) + Number(minute);

        ttime -= (minute % 30);
        var time_data = [[],[],[],[],[],[]];

        for (var i = 11; i >= 0; i--) {

            var h = parseInt(ttime / 60);
            var m = (ttime % 60);

            if (ttime < 0) {
                ttime = 24 * 60;
            }

            console.log(i + ":" + yyyy + "-" + (today.getMonth() + 1) + "-" + today.getDate() + "-" + h);
            if (m == 0) {
                await Inner_Todo.findOne({ "year": yyyy, "month": today.getMonth() + 1, "date": today.getDate(), "hours": h, "minute": { $gte: 0, $lte: 29 } }, { _id: 0 }, function (err, todo) {
                    if (err) throw err;
                    if (todo.length != 0) {

                        time_data[0].unshift(todo.temp);
                        time_data[1].unshift(todo.humid);
                        time_data[2].unshift(todo.pm25);
                        time_data[3].unshift(todo.pm10);
                        time_data[4].unshift(todo.voc);
                        time_data[5].unshift(todo.co2);
                    }
                    else{
                        
                        for(var j=0; j<6; j++){
                            time_data[j].unshift("null");
                        }

                    }
                });
            } else {
                await Inner_Todo.findOne({ "year": yyyy, "month": today.getMonth() + 1, "date": today.getDate(), "hours": h, "minute": { $gte: 30, $lte: 59 } }, { _id: 0 }, function (err, todo) {
                    if (err) throw err;

                    if (todo.length != 0) {

                        time_data[0].unshift(todo.temp);
                        time_data[1].unshift(todo.humid);
                        time_data[2].unshift(todo.pm25);
                        time_data[3].unshift(todo.pm10);
                        time_data[4].unshift(todo.voc);
                        time_data[5].unshift(todo.co2);
                    }
                    else{

                        for(var j=0; j<6; j++){
                            time_data[j].unshift("null");
                        }

                    }
                });
            }
            ttime -= 30;
        }

        setTimeout(() => {
            console.log('SET TIME OUT CONFIRM');
            console.log(time_data);
        }, 3000);

        res.render('그래프', {
            id: req.session.user_id, dd: dd, mm: mm, yyyy: yyyy, hour: hour, minute: minute, time_data: time_data,
            Inner_temp: Inner_temp, Inner_humid: Inner_humid, Inner_pm25: Inner_pm25, Inner_pm10: Inner_pm10, Inner_voc: Inner_voc, Inner_co2: Inner_co2
        });

    } else {
        res.locals.message = '잘못된 경로로 접속하였습니다.';

        const myError = new Error('you connect wrong URL');
        res.locals.error = myError;
        // render the error page
        res.status(404);
        res.render('error');
    }
});

module.exports = router;