import express from 'express'
import {detail_air} from '../controllers/detail_air.controller'

const router = express.Router()

const mongoose = require('mongoose');

const Inner_DATA = require('./Inner_sensor.js');

const Outer_DATA = require('./Outer_sensor.js');

const Inner_Todo = Inner_DATA;
const Outer_Todo = Outer_DATA;
// DATA terminal display

var Inner = new Object();
var Outer = new Object();
/* GET home page. */
router.get('/', async(req, res, next) => {
    
    
    /*Inner_Todo.find({ },{_id:0}, function(err, todo) {
        if(err) throw err;
        console.log(todo);
        Inner = todo;
    }).limit(3).sort({$natural:-1});

    Outer_Todo.find({ },{_id:0}, function(err, todo) {
        if(err) throw err;
        console.log(todo);
        Outer = todo;
    }).limit(3).sort({$natural:-1});

    let In = JSON.stringify(Inner);
    let Out = JSON.stringify(Outer);
    
    res.json({In,Out});*/
    if(req.session.logined) {

        await Inner_Todo.find({ },{_id:0}, function(err, todo) {
            if(err) throw err;
            console.log(todo);
            Inner = todo;
        }).limit(1).sort({$natural:-1});
        await Outer_Todo.find({ },{_id:0}, function(err, todo) {
            if(err) throw err;
            console.log(todo);
            Outer = todo;
        }).limit(1).sort({$natural:-1});
        //res.json(Outer);
        var Inner_temp= JSON.stringify(Inner[0].temp);
        var Inner_humid= JSON.stringify(Inner[0].humid);
        var Inner_pm25= JSON.stringify(Inner[0].pm25);
        var Inner_pm10= JSON.stringify(Inner[0].pm10);
        var Inner_voc= JSON.stringify(Inner[0].voc);
        var Inner_co2= JSON.stringify(Inner[0].co2);

        var Inner_hh= JSON.stringify(Inner[0].hours);
        var Inner_mm= JSON.stringify(Inner[0].minute);
    
        var Outer_temp= JSON.stringify(Outer[0].temp);
        var Outer_humid= JSON.stringify(Outer[0].humid);
        var Outer_pm25= JSON.stringify(Outer[0].pm25);
        var Outer_pm10= JSON.stringify(Outer[0].pm10);
        var Outer_voc= JSON.stringify(Outer[0].voc);
        var Outer_co2= JSON.stringify(Outer[0].co2);

        
        if(Inner_hh<10)
        {
            Inner_hh = '0' + Inner_hh;
        }
        if(Inner_mm<10)
        {
            Inner_mm = '0' + Inner_mm;
        }
        
        res.render('상세공기상태', {Inner_hh:Inner_hh, Inner_mm:Inner_mm,
            Inner_temp:Inner_temp,Inner_humid:Inner_humid,Inner_pm25:Inner_pm25,Inner_pm10:Inner_pm10,Inner_voc:Inner_voc,Inner_co2:Inner_co2,
            Outer_temp:Outer_temp,Outer_humid:Outer_humid,Outer_pm25:Outer_pm25,Outer_pm10:Outer_pm10,Outer_voc:Outer_voc,Outer_co2:Outer_co2});
    } else {
        res.locals.message = '잘못된 경로로 접속하였습니다.';

        const myError = new Error('you connect wrong URL');
        res.locals.error = myError;
        // render the error page
        res.status(404);
        res.render('error');
    }
});


router.get('/whatstatus', (req, res, next) => {
    
    let In = JSON.stringify(Inner);
    let Out = JSON.stringify(Outer);
    
    res.json({In,Out});
    
});


module.exports = router;

