import express from 'express'
import { resolveSrv } from 'dns';
const http = require('http');
const router = express.Router();

const hostname = '192.168.0.9'
const port = '3000'
const path = '/AirconditionerControl/'

const pi_server_Url = require('./Pi_Url');
pi_server_Url.path = path;
const status = require('../../Model/Machine_Status')


/*
let pi_server_Url = {
    //hostname: '192.168.0.9,
    hostname: '192.168.1.84',
    port: '3000',
    path : '/AirconditionerControl/'
};*/

router.post('/power', (req, res, next) => {
    const aa = {};
    console.log('Airconditioner power');
    

    pi_server_Url.path += "power";
    http.request(pi_server_Url).end();
    pi_server_Url.path = '/AirconditionerControl/';
    if(status.airconditioner_power == 0){
        status.airconditioner_power = 1;
    }
    else{
        status.airconditioner_power = 0;
    }
    res.json(status);
});

//바람세기
router.post('/speeddown', (req, res, next) => {
    const aa = {};
    console.log('Airconditioner speeddown');
    pi_server_Url.path += "speeddown";
    http.request(pi_server_Url).end();
    pi_server_Url.path = '/AirconditionerControl/';

    let current_mode = req.body.mode;
    if(current_mode == "냉방"){
        status.airconditioner_mode = 0;
        if(status.airconditioner_speed.cold_speed != 1)
            status.airconditioner_speed.cold_speed-=1;
    }
    else if(current_mode == "난방"){
        status.airconditioner_mode = 1;
        if(status.airconditioner_speed.warm_speed !=1)
            status.airconditioner_speed.warm_speed-=1;
    }

    res.json(status);
});

router.post('/speedup', (req, res, next) => {
    const aa = {};
    console.log('Airconditioner speed');
    pi_server_Url.path += "speedup";
    http.request(pi_server_Url).end();
    pi_server_Url.path = '/AirconditionerControl/';

    let current_mode = req.body.mode;
    if(current_mode == "냉방"){
        status.airconditioner_mode = 0;
        if(status.airconditioner_speed.cold_speed != 3)
            status.airconditioner_speed.cold_speed+=1;
    }
    else if(current_mode == "난방"){
        status.airconditioner_mode = 1;
        if(status.airconditioner_speed.warm_speed !=3)
            status.airconditioner_speed.warm_speed+=1;
    }


    res.json(status);
});


router.post('/tempUp', (req, res, next) => {
    const aa = {};
    console.log('Airconditioner tempup');
    pi_server_Url.path += "tempup";
    http.request(pi_server_Url).end();
    pi_server_Url.path = '/AirconditionerControl/';
    
    let current_mode = req.body.mode;
    if(current_mode == "냉방"){
        status.airconditioner_mode = 0;
        if(status.airconditioner_temp.cold_temp != 32)
            status.airconditioner_temp.cold_temp+=1;
    }
    else if(current_mode == "난방"){
        status.airconditioner_mode = 1;
        if(status.airconditioner_temp.warm_temp !=23)
            status.airconditioner_temp.warm_temp+=1;
    }
    
    res.json(status);
});

router.post('/tempDown', (req, res, next) => {
    const aa = {};
    console.log('Airconditioner tempdown');
    pi_server_Url.path += "tempdown";
    http.request(pi_server_Url).end();
    pi_server_Url.path = '/AirconditionerControl/';

    let current_mode = req.body.mode;
    if(current_mode == "냉방"){
        status.airconditioner_mode = 0;
        if(status.airconditioner_temp.cold_temp != 18)
            status.airconditioner_temp.cold_temp-=1;
    }
    else if(current_mode == "난방"){
        status.airconditioner_mode = 1;
        if(status.airconditioner_temp.warm_temp !=13)
            status.airconditioner_temp.warm_temp-=1;
    }
    res.json(status);
});

router.post('/warm', (req, res, next) => {
    const aa = {};
    console.log('Airconditioner warm');
    pi_server_Url.path += "warm";
    http.request(pi_server_Url).end();
    pi_server_Url.path = '/AirconditionerControl/';
    status.airconditioner_mode = 1;
    
    res.json(status);
});

router.post('/cold', (req, res, next) => {
    const aa = {};
    console.log('Airconditioner cold');
    pi_server_Url.path += "cold";
    http.request(pi_server_Url).end();
    pi_server_Url.path = '/AirconditionerControl/';
    status.airconditioner_mode = 0;
    res.json(status);
});

router.post('/dehumidity', (req, res, next) => {
    const aa = {};
    console.log('Airconditioner dehumidity');
    pi_server_Url.path += "dehumidity";
    http.request(pi_server_Url).end();
    pi_server_Url.path = '/AirconditionerControl/';
    status.airconditioner_mode = 2;
    res.json(status);
});


router.post('/status', (req, res, next) => {
    console.log("airconditioner_status");
    res.json(status);
    

});




router.post('/:action', (req, res, next) => {
    console.log(`airconditioner ${req.params.action}`);
    http.request({
        hostname,
        port,
        path: path + req.params.action
    }).end();
    console.log(path + req.params.action);
    res.json({});
});

module.exports = router;