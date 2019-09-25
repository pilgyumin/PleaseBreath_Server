import express from 'express'
const router = express.Router()
const http = require('http');

let solution_status=-1;

let piserverUrl={
    hostname: '192.168.0.9',
    port: '3000',
    path : '/aiSolutionControl/'
};

router.get('/ON', (req, res, next) => {
    solution_status=1;
    const aa = {};
    console.log('aiSolution ON');
    piserverUrl.path += "ON";
    http.request(piserverUrl).end();
    console.log(piserverUrl);
    piserverUrl.path = '/aiSolutionControl/';
    res.json(aa);
});

router.get('/OFF', (req, res, next) => {
    solution_status=0;
    const aa = {};
    console.log('aiSolution OFF');
    piserverUrl.path += "OFF";
    http.request(piserverUrl).end();
    console.log(piserverUrl);
    piserverUrl.path = '/aiSolutionControl/';
    res.json(aa);
});

module.exports = router;

