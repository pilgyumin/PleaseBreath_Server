import express from 'express'
import {main} from '../controllers/main.controller'

import fs from 'fs'

const router = express.Router()

let status = require('../Model/DATA');


/* GET home page. */
router.get('', (req, res, next) => {
    if(req.session.logined) {
        res.render('메인', { id: req.session.user_id });
    } else {
        res.locals.message = '잘못된 경로로 접속하였습니다.';

        const myError = new Error('you connect wrong URL');
        res.locals.error = myError;
        // render the error page
        res.status(404);
        res.render('error');
    }
});



router.get('/whatstatus', (req, res, next) => {
    console.log('main whatstatus in');
    //외부, 내부 공기 상태를 JSON화시켜서 응답함
    res.json(JSON.stringify(status));
    
});

module.exports = router;