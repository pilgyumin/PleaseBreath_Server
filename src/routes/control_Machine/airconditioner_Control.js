import express from 'express'
const http = require('http');
const router = express.Router();

const hostname = '192.168.0.9'
const port = '3000'
const path = '/Airconditioner_Control/'

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