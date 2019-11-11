import express from 'express'
import {main} from '../controllers/main.controller'

import fs from 'fs'

const router = express.Router()
let status = require('../Model/DATA');


/* GET home page. */
router.get('', (req, res, next) => {
    console.log('test');
    res.render('popup');
});

router.post('/Detail', (req, res, next) => {
    //console.log(req.body);
    res.json({});
    //res.end();
    //res.send("POST!");
    console.log(req.body);
  });
module.exports = router;

