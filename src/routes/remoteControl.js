import express from 'express'
import {remoteControl} from '../controllers/remoteControl.controller'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('remoteControl');
});

module.exports = router;

