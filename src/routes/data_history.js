import express from 'express'
import {data_history} from '../controllers/data_history.controller'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
    if(req.session.logined) {
        res.render('그래프', { id: req.session.user_id });
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

