import express from 'express'
import {remoteControl} from '../controllers/remoteControl.controller'

const http = require('http');
const router = express.Router()


//Server -> Pi
router.get('/', (req, res, next) => {
    //Power On / Off
    res.render('remoteControl');
});

module.exports = router;


