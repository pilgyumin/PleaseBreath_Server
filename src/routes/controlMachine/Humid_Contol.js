/*
    HumidControl 
*/

import express from 'express'

const router = express.Router()
let status = require('./Humid_Status.js');
/* 
    Status : 
                Power  : ON / OFF
    Ir :
            On
*/


//Server -> Pi
router.get('/', (req, res, next) => {
    //Power On / Off
    

});


module.exports = router;

