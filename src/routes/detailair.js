import express from 'express'
import {detailair} from '../controllers/detailair.controller'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('detailair');
});

module.exports = router;

