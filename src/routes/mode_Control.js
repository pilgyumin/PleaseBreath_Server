import express from 'express'
import {mode_Control} from '../controllers/mode_Control.controller'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('mode_Control');
});

module.exports = router;

