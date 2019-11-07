// 민필규 - 전체 개발

import express from 'express'
const router = express.Router()
const http = require('http');

let solution_status = require('../Model/aiSolution_status');

//const pi_hostname = '192.168.1.84';
const pi_hostname = 'localhost';
const pi_port = '3000';
const pi_path = '/ReservationControl/';

router.post('/ON', (req, res, next) => {
    console.log('reservation ON');
    console.log(req.body);
    let data = {
        year : req.body.year,
        month : req.body.month,
        day : req.body.day,
        hour : req.body.hour,
        minute : req.body.minute,
        second : req.body.second
    }
    http.request({
        hostname : pi_hostname,
        port : pi_port,
        path: pi_path + 'ON',
        method: 'POST',
        headers: {
            'Content-Type': ' application/x-www-form-urlencoded',
            'Content-Length': Buffer.byteLength(JSON.stringify(data))
        },
    }).end();

    res.json(JSON.stringify(req.body));
});

module.exports = router;
