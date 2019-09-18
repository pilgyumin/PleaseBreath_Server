import express from 'express'

const router = express.Router();

const InnerSensor = require('./Innersensor.js');
const OuterSensor = require('./Outersensor.js');

const db = require('./dbconnect.js');
let mode = -1;

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
   // db();
    mode = -1;
    if(req.query.tempOuter){
        mode = 0;
        status.tempOuter = req.query.tempOuter;
    }
    if(req.query.tempInner){
        mode = 1;
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
        status.vocInner = req.query.vocInner;
    }
    console.log(JSON.stringify(status));
    res.json(JSON.stringify(status));
    console.log(mode);

    if(mode == 0 || mode == 1){//0 : Outer 1 : Inner
        var Inputdata;
        if(mode == 1)
            Inputdata = new InnerSensor({id:"Inner",temp:status.tempInner,humid:status.humidInner,pm25:status.pm25Inner,pm10:status.pm10Inner,voc:status.vocInner});


        else if(mode == 0)
            Inputdata = new OuterSensor({id:"Outer",temp:status.tempOuter,humid:status.humidOuter,pm25:status.pm25Outer,pm10:status.pm10Outer,voc:status.vocOuter});
        
    
    
    Inputdata.save(function(error, data){
        if(error){
            console.log(error);
        }else{
            console.log(data);
            console.log('Saved!')
        }
    });
    mode = -1;
    }

});

module.exports = router;