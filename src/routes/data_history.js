import express from 'express'
import {data_history} from '../controllers/data_history.controller'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('data_history');
});

module.exports = router;

