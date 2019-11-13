// 민필규 - 전체 개발

import express from 'express'
const router = express.Router()
const http = require('http');
const fetch = require('node-fetch');

let solution_status = require('../Model/aiSolution_status');
let request = require('request');

//const pi_hostname = '192.168.1.84';
const pi_hostname = 'localhost';
const pi_port = '3000';
const pi_path = '/ReservationControl/';

// 요청이 들어오면
// data set
// res.redirect('url' + resource)


router.post('/:mode/:power', (req, res, next) => {
    // 솔루션 가동 예약 명령

    let reservation_data = {
        data : new Date(req.body.year, req.body.month - 1, req.body.day, req.body.hour, req.body.minute , 0 ).getTime() / 1000
    };

    fetch("http://" + pi_hostname + ":" + pi_port + pi_path + req.params.mode + '/' + req.params.power, {
        method: 'post',
        body:    JSON.stringify(reservation_data),
        headers: { 'Content-Type': 'application/json' },
    })
        .then(res => res.json())
        .then(json => console.log(json));
    res.json(JSON.stringify(req.body));
});

module.exports = router;
