import express from 'express'
import {main} from '../controllers/main.controller'

import fs from 'fs'

const router = express.Router()
let status = require('./DATA.js');


/* GET home page. */
router.get('', (req, res, next) => {
  
    res.render('main');
});

router.get('/whatstatus', (req, res, next) => {
    console.log('main whatstatus in');
    //외부, 내부 공기 상태를 JSON화시켜서 응답함
    res.json(JSON.stringify(status));
    
});

module.exports = router;