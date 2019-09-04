import express from 'express'

const router = express.Router();
const Sensor = require('./sensor.js');
const db = require('./dbconnect');

const status = {
    tempOuter : "",
    tempInner : "",
    humidOuter : "",
    humidInner : "",
    pm10Outer : "",
    pm10Inner : "",
    pm25Outer : "",
    pm25Inner : "",
    vocOuter : "",
    vocInner : "",
};

/* GET home page. */
router.get('', (req, res, next) => {
    db();
    if(req.query.tempOuter){
        status.tempOuter = req.query.tempOuter;
    }
    if(req.query.tempInner){
        status.tempInner = req.query.tempInner;
    }

    //humid
    if(req.query.humidOuter){
        status.humidOuter = req.query.humidOuter;
    }
    if(req.query.humidInner){
        status.humidInner = req.query.humidInner;
    }

    //pm10
    if(req.query.pm10Outer){
        status.pm10Outer = req.query.pm10Outer;
    }
    if(req.query.pm10Inner){
        status.pm10Inner = req.query.pm10Inner;
    }

    //pm2.5
    if(req.query.pm25Outer){
        status.pm25Outer = req.query.pm25Outer;
    }
    if(req.query.pm25Inner){
        status.pm25Inner = req.query.pm25Inner;
    }

    //voc
    if(req.query.vocOuter){
        status.vocOuter = req.query.vocOuter;
    }
    if(req.query.vocInner){
        status.vocOuter = req.query.vocOuter;
    }
    console.log(JSON.stringify(status));
    res.json(JSON.stringify(status));
});

module.exports = router;