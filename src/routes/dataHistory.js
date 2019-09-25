import express from 'express'
import {dataHistory} from '../controllers/dataHistory.controller'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('dataHistory');
});

module.exports = router;

