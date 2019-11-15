import express from 'express'
import {remote_Control} from '../controllers/remote_Control.controller'

const http = require('http');
const router = express.Router()


//Server -> Pi
router.get('/', (req, res, next) => {
    //Power On / Off
    if(req.session.logined) {
        res.render('리모컨기능', { id: req.session.user_id });
    } else {
        res.locals.message = '잘못된 경로로 접속하였습니다.';

        const myError = new Error('you connect wrong URL');
        res.locals.error = myError;
        // render the error page
        res.status(404);
        res.render('error');
    }
});



module.exports = router;


