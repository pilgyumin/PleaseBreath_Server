import express from 'express'
import {data_history} from '../controllers/data_history.controller'

const router = express.Router()

const mongoose = require('mongoose');

const Inner_DATA = require('./Inner_sensor.js');


const Inner_Todo = Inner_DATA;
// DATA terminal display

let Inner = new Object();
/* GET home page. */
router.get('/', async (req, res, next) => {
    if (req.session.logined) {

        await Inner_Todo.find({}, { _id: 0 }, function (err, todo) {
            if (err) throw err;
            Inner = todo;
        }).limit(1).sort({ $natural: -1 });
        //res.json(Outer);
        let Inner_temp = JSON.stringify(Inner[0].temp);
        let Inner_humid = JSON.stringify(Inner[0].humid);
        let Inner_pm25 = JSON.stringify(Inner[0].pm25);
        let Inner_pm10 = JSON.stringify(Inner[0].pm10);
        let Inner_voc = JSON.stringify(Inner[0].voc);
        let Inner_co2 = JSON.stringify(Inner[0].co2);

        let today = new Date();
        let dd = today.getDate();
        let mm = today.getMonth() + 1; //January is 0!
        let yyyy = today.getFullYear();
        let hour = today.getHours();
        let minute = today.getMinutes();

        let time_data = new Array(200);

        let temp_stamp = new Date();
        temp_stamp.setMinutes(today.getMinutes() - (minute%30));
        console.log(today, temp_stamp);


        for (let i = 11; i >= 0; i--) {

            //now is temp_stamp. find temp_stamp ~ temp_stamp+30m data average
            let start = temp_stamp.getTime();
            let end = start + 1800000;

            // let temp_todo = new Object();

            console.log(0+i,12+i,24+i,36+i,48+i,60+i);
               const temp_todo =  await Inner_Todo.findOne({ "id": "Inner", "timestamp": { $gte: start, $lt: end } }, function (err, todo) {
                    if (err) console.log(err)
                    // else if (!todo);
                    // else{
                    // temp_todo=todo;
                    // }
                });

                    console.log(i+temp_todo);
                if (temp_todo != null && temp_todo.length != 0) {
                        time_data[0+i]=temp_todo.temp;
                        time_data[12+i]=temp_todo.humid;
                        time_data[24+i]=temp_todo.pm25;
                        time_data[36+i]=temp_todo.pm10;
                        time_data[48+i]=temp_todo.voc;
                        time_data[60+i]=temp_todo.co2;
                    }
                    else{
                        
                        for(let j=0; j<6; j++){
                            console.log(j*12+i);
                            time_data[j*12+i]="null";
                        }

                    }
                temp_stamp.setMinutes(temp_stamp.getMinutes() - 30); // 30분 전으로
        }

        setTimeout(() => {
            console.log('SET TIME OUT CONFIRM');
            console.log(time_data);
        }, 3000);

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