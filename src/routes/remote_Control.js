import express from 'express'
import {remote_Control} from '../controllers/remote_Control.controller'

const http = require('http');
const router = express.Router()


//Server -> Pi
router.get('/', (req, res, next) => {
    //Power On / Off
    res.render('remote_Control');
});

module.exports = router;


