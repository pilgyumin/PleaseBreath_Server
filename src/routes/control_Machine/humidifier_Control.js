import express from 'express'
const router = express.Router();
const http = require('http');
const pi_server_Url = require('./Pi_Url');
pi_server_Url.path = '/HumidControl';
const status = require('../../Model/Machine_Status')

/*
let pi_server_Url = {
    hostname: '192.168.0.9',
    port: '3000',
    path : '/HumidControl/'
};*/

/* GET home page. */
router.post('/power', (req, res, next) => {
    
    console.log('humidifier power');
    pi_server_Url.path += "power";
    http.request(pi_server_Url).end();
    console.log(pi_server_Url);
    pi_server_Url.path = '/HumidControl/';
    if(status.dehumidifier_power == 0){
        status.dehumidifier_power = 1;
        status.dehumidifier_speed = 1;
    }
    else{
        status.dehumidifier_power = 0;
        status.dehumidifier_speed = 1;
    }
    res.json(status);
});

router.post('/speedup', (req, res, next) => {
    
    
    if(status.dehumidifier_power == 1){
        console.log('humidifier speed');
        pi_server_Url.path += "speedup";
        http.request(pi_server_Url).end();
        console.log(pi_server_Url);
        pi_server_Url.path = '/HumidControl/';
        if(status.dehumidifier_speed == 4)
            res.json(0);
        else{
            status.dehumidifier_speed += 1;
            res.json(status.dehumidifier_speed);
        }
    }
    else{
        console.log("humidifier status : power off");
        res.json(-1);
    }
});

router.post('/speeddown', (req, res, next) => {
    
    
    if(status.dehumidifier_power == 1){
        console.log('humidifier speed');
        pi_server_Url.path += "speeddown";
        http.request(pi_server_Url).end();
        console.log(pi_server_Url);
        pi_server_Url.path = '/HumidControl/';
        if(status.dehumidifier_speed == 1)
            res.json(0);
        else{
            status.dehumidifier_speed -= 1;
            res.json(status.dehumidifier_speed);
        }
    }
    else{
        console.log("humidifier status : power off");
        res.json(-1);
    }
});


router.post('/status', (req, res, next) => {
    console.log("dehumidity_status");
    res.json(status);
    

});

module.exports = router;