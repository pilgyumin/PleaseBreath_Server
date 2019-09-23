const express = require('express');
const http = require('http');
const router = express.Router();
let status = require('../DATA/Humid_Status.js');

let Humid_Control_Url = {
    hostname: '192.168.0.8',
    port: '3000',
    path : '?'
};


router.get('/power', (req, res, next) => {

    if(status.Power == "") status.Power = "ON";
    else if(status.Power == "ON") status.Power = "OFF";
    else status.Power = "ON";
    Humid_Control_Url.path += status.Power;
    http.request(Humid_Control_Url).end();
});


module.exports = router;


