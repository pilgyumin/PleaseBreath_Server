import express from 'express'
const router = express.Router();

const Inner_Sensor = require('./Inner_sensor.js');
const Outer_Sensor = require('./Outer_sensor.js');

const db = require('./db_connect.js');
let status = require('../Model/DATA.js');

let mode = -1;


router.get('/whatstatus', (req, res, next) => {
    res.json(JSON.stringify(status));
});


/* GET home page. */
router.get('', (req, res, next) => {
   // db();
    mode = -1;
    if(req.query.tempOuter){
        mode = 0;
        status.temp_Outer = req.query.tempOuter;
    }
    if(req.query.tempInner){
        mode = 1;
        status.temp_Inner = req.query.tempInner;
    }

    //humid
    if(req.query.humidOuter){
        mode = 0;
        status.humid_Outer = req.query.humidOuter;
    }
    if(req.query.humidInner){
        mode = 1;
        status.humid_Inner = req.query.humidInner;
    }

    //pm10
    if(req.query.pm10Outer){
        mode = 0;
        status.pm10_Outer = req.query.pm10Outer;
    }
    if(req.query.pm10Inner){
        mode = 1;
        status.pm10_Inner = req.query.pm10Inner;
    }

    //pm2.5
    if(req.query.pm25Outer){
        mode = 0;
        status.pm25_Outer = req.query.pm25Outer;
    }
    if(req.query.pm25Inner){
        mode = 1;
        status.pm25_Inner = req.query.pm25Inner;
    }

    //voc
    if(req.query.vocOuter){
        mode = 0;
        status.voc_Outer = req.query.vocOuter;
    }
    if(req.query.vocInner){
        mode = 1;
        status.voc_Inner = req.query.vocInner;
    }

    //co2
    if(req.query.co2Outer){
        mode = 0;
        status.co2_Outer = req.query.co2Outer;
    }
    if(req.query.co2Inner){
        mode = 1;
        status.co2_Inner = req.query.co2Inner;
    }

    console.log(JSON.stringify(status));


    if(mode == 0 || mode == 1){//0 : Outer 1 : Inner
        var Input_data;
        if(mode == 1)
            Input_data = new Inner_Sensor({id:"Inner",temp:status.temp_Inner,humid:status.humid_Inner,pm25:status.pm25_Inner,pm10:status.pm10_Inner,voc:status.voc_Inner,co2:status.co2_Inner});


        else if(mode == 0)
            Input_data = new Outer_Sensor({id:"Outer",temp:status.temp_Outer,humid:status.humid_Outer,pm25:status.pm25_Outer,pm10:status.pm10_Outer,voc:status.voc_Outer,co2:status.co2_Outer});


    
    Input_data.save(function(error, data){
        if(error){
            console.log(error);
        }else{
            console.log(data);
            console.log('Saved!')
        }
    });
    mode = -1;
    res.render('main');
    }
    
});

module.exports = router;