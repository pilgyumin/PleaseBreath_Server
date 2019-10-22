import express from 'express'
const router = express.Router()
const http = require('http');

let solution_status = require('../Model/aiSolution_status');

let pi_server_Url={
    hostname: '192.168.0.9',
    port: '3000',
    path : '/aiSolutionControl/'
};

router.get('/ON', (req, res, next) => {
    solution_status.power = 1;
    console.log('aiSolution ON');
    pi_server_Url.path += "ON";
    http.request(pi_server_Url).end();
    console.log(pi_server_Url);
    pi_server_Url.path = '/aiSolutionControl/';
    res.json({});
});

router.get('/OFF', (req, res, next) => {
    solution_status.power = 0;
    console.log('aiSolution OFF');
    pi_server_Url.path += "OFF";
    http.request(pi_server_Url).end();
    console.log(pi_server_Url);
    pi_server_Url.path = '/aiSolutionControl/';
    res.json({});
});

module.exports = router;

