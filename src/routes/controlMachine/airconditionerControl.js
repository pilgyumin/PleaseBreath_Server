import express from 'express'
const router = express.Router();

let piserverUrl = {
    hostname: '192.168.0.9',
    port: '3000',
    path : '/Airconditioner_Control/'
};

/* GET home page. */
router.post('/power', (req, res, next) => {
    const aa = {};
    console.log('airconditioner power');
    piserverUrl.path += "power";
    http.request(piserverUrl).end();
    console.log(piserverUrl);
    piserverUrl.path = '/Airconditioner_Control/';
    res.json(aa);
});

router.post('/speedup', (req, res, next) => {
    const aa = {};
    console.log('airconditioner speedup');
    piserverUrl.path += "speedup";
    http.request(piserverUrl).end();
    console.log(piserverUrl);
    piserverUrl.path = '/Airconditioner_Control/';
    res.json(aa);
});

router.post('/speeddown', (req, res, next) => {
    const aa = {};
    console.log('airconditioner speeddown');
    piserverUrl.path += "speeddown";
    http.request(piserverUrl).end();
    console.log(piserverUrl);
    piserverUrl.path = '/Airconditioner_Control/';
    res.json(aa);
});

module.exports = router;