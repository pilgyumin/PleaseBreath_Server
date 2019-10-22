// 민필규 - 전체 개발

import express from 'express'
const router = express.Router()
const http = require('http');

var schedule = require('node-schedule');

let solution_status = require('../Model/aiSolution_status');

const pi_hostname = '192.168.1.2';
const pi_port = '3000';
const pi_path = '/aiSolutionControl/';

let job;

router.post('/ON', (req, res, next) => {
    console.log('reservation ON');

    let date = new Date(req.body.year, req.body.month, req.body.day, req.body.hour, req.body.minute, req.body.second);

    job = schedule.scheduleJob(date, function(){
        console.log('schedule start');
        solution_status.power = 1;
        http.request({
            hostname : pi_hostname,
            port : pi_port,
            path: pi_path + 'ON'
        }).end();
    });

    res.json({});
});

router.post('/OFF', (req, res, next) => {
    solution_status.power = 0;
    console.log('reservation OFF');
    job.cancel();
    res.json({});
});

module.exports = router;

