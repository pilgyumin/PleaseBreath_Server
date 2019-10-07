import express from 'express'
const router = express.Router();
const http = require('http');

let pi_server_Url = {
    hostname: '192.168.0.9',
    port: '3000',
    path : '/Humid_Control/'
};

/* GET home page. */
router.post('/power', (req, res, next) => {
    const aa = {};
    console.log('humidifier power');
    pi_server_Url.path += "power";
    http.request(pi_server_Url).end();
    console.log(pi_server_Url);
    pi_server_Url.path = '/Humid_Control/';
    res.json(aa);
});

router.post('/speedup', (req, res, next) => {
    const aa = {};
    console.log('humidifier mist');
    pi_server_Url.path += "mist";
    http.request(pi_server_Url).end();
    console.log(pi_server_Url);
    pi_server_Url.path = '/Humid_Control/';
    res.json(aa);
});

router.post('/speeddown', (req, res, next) => {
    const aa = {};
    console.log('humidifier humidity');
    pi_server_Url.path += "humidity";
    http.request(pi_server_Url).end();
    console.log(pi_server_Url);
    pi_server_Url.path = '/Humid_Control/';
    res.json(aa);
});

module.exports = router;