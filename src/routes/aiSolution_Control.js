import express from 'express'
const router = express.Router()
const http = require('http');

let solution_status = require('../Model/aiSolution_status');

let pi_server_Url={
    hostname: '192.168.1.84',
    port: '3000',
    path : '/Mode/Normal'
};

router.get('/ON', (req, res, next) => {
    solution_status.power = 1;
    console.log('aiSolution ON');
    http.request(pi_server_Url).end();
    console.log(pi_server_Url);
    pi_server_Url.path = '/Mode/Normal';
    res.json({});
});

router.get('/OFF', (req, res, next) => {
    solution_status.power = 0;
    console.log('aiSolution OFF');
    http.request(pi_server_Url).end();
    console.log(pi_server_Url);
    pi_server_Url.path = '/Mode/Normal';
    res.json({});
});

module.exports = router;
