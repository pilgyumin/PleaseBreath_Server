import express from 'express'
const router = express.Router();
const http = require('http');

const pi_server_Url = require('./Pi_Url');
pi_server_Url.path = '/AircleanerControl/';
const status = require('../../Model/Machine_Status')

/*
let pi_server_Url = {
    hostname: '192.168.0.9',
    port: '3000',
    path : '/AircleanerControl/'
};*/

/* GET home page. */
router.post('/power', (req, res, next) => {
    const aa = {};
    console.log('aircleaner power');
    pi_server_Url.path += "power";
    http.request(pi_server_Url).end();
    console.log(pi_server_Url);
    pi_server_Url.path = '/AircleanerControl/';
    if(status.aircleaner_power == 1){
        status.aircleaner_power = 0;
        res.json(0);
    }
    else{
        status.aircleaner_power = 1;
        res.json(1);
    }
});

router.post('/speedup', (req, res, next) => {
    const aa = {};
    console.log('aircleaner speedup' + status.aircleaner_speed);
    pi_server_Url.path += "speedup";
    http.request(pi_server_Url).end();
    console.log(pi_server_Url);
    pi_server_Url.path = '/AircleanerControl/';
    console.log(status.aircleaner_speed);
    if(status.aircleaner_speed == 4)
        res.json(0);
    else{
        status.aircleaner_speed += 1;
        res.json(status.aircleaner_speed);
    }
});

router.post('/speeddown', (req, res, next) => {
    const aa = {};
    console.log('aircleaner speeddown');
    pi_server_Url.path += "speeddown";
    http.request(pi_server_Url).end();
    console.log(pi_server_Url);
    pi_server_Url.path = '/AircleanerControl/';

    if(status.aircleaner_speed == 1)
        res.json(0);
    else{
        status.aircleaner_speed -= 1;
        res.json(status.aircleaner_speed);
    }

});

module.exports = router;