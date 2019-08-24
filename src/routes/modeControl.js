import express from 'express'
import {modeControl} from '../controllers/modeControl.controller'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('modeControl');
});

module.exports = router;

