/*
    HumidControl 
*/

import express from 'express'

const http = require('http');
const router = express.Router()
let status = require('./Humid_Status.js');

let piserverUrl = {
    hostname: '192.168.0.9',
    port: '3000',
    path : '/Humid_Control/'
};


/* 
    Status : 
                Power  : ON / OFF
    Ir :
            Power_Code
*/


//Server -> Pi
router.get('/', (req, res, next) => {
    //Power On / Off
    res.render('remoteControl');
});


router.post('/Humid_Control/power/', (req, res, next) => {
    //Power On / Off
    
    if(status.Power == "") status.Power = "ON";
    else if(status.Power == "ON") status.Power = "OFF";
    else status.Power = "ON";
    piserverUrl.path += "Power";
    http.request(piserverUrl).end();
    res.render('remoteControl');
    piserverUrl.path = '/Humid_Control/';
});

router.post('/Humid_Control/mist/', (req, res, next) => {
    //Power On / Off
    
    if(status.Power == "") status.Power = "ON";
    else if(status.Power == "ON") status.Power = "OFF";
    else status.Power = "ON";
    piserverUrl.path += "mist";
    http.request(piserverUrl).end();
    res.render('remoteControl');
    piserverUrl.path = '/Humid_Control/';
});



module.exports = router;


