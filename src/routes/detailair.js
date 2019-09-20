import express from 'express'
import {detailair} from '../controllers/detailair.controller'

const router = express.Router()

const mongoose = require('mongoose');

const Inner_DATA = require('./Innersensor.js');

const Outer_DATA = require('./Outersensor.js');



const Inner_Todo = Inner_DATA;
const Outer_Todo = Outer_DATA;
// DATA terminal display




var Inner = new Object();
var Outer = new Object();
/* GET home page. */
router.get('/', (req, res, next) => {
    
    
    Inner_Todo.find({ }, function(err, todo) {
        if(err) throw err;
        console.log(todo);
        Inner = todo;
    }).limit(3).sort({$natural:-1});

    Outer_Todo.find({ }, function(err, todo) {
        if(err) throw err;
        console.log(todo);
        Outer = todo;
    }).limit(3).sort({$natural:-1});


    res.render('detailair');
});


router.get('/whatstatus', (req, res, next) => {
    
    let In = JSON.stringify(Inner);
    let Out = JSON.stringify(Outer);

    res.json({In,Out});
    
});


module.exports = router;

