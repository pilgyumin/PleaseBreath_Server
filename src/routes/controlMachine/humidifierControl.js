import express from 'express'
const router = express.Router();
const http = require('http');

let piserverUrl = {
    hostname: '192.168.0.9',
    port: '3000',
    path : '/Humid_Control/'
};

/* GET home page. */
router.post('/power', (req, res, next) => {
    const aa = {};
    console.log('humidifier power');
    piserverUrl.path += "power";
    http.request(piserverUrl).end();
    console.log(piserverUrl);
    piserverUrl.path = '/Humid_Control/';
    res.json(aa);
});

router.post('/speedup', (req, res, next) => {
    const aa = {};
    console.log('humidifier mist');
    piserverUrl.path += "mist";
    http.request(piserverUrl).end();
    console.log(piserverUrl);
    piserverUrl.path = '/Humid_Control/';
    res.json(aa);
});

router.post('/speeddown', (req, res, next) => {
    const aa = {};
    console.log('humidifier humidity');
    piserverUrl.path += "humidity";
    http.request(piserverUrl).end();
    console.log(piserverUrl);
    piserverUrl.path = '/Humid_Control/';
    res.json(aa);
});

module.exports = router;