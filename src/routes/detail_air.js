import express from 'express'
import {detail_air} from '../controllers/detail_air.controller'

const router = express.Router()

const mongoose = require('mongoose');

const Inner_DATA = require('./Inner_sensor.js');

const Outer_DATA = require('./Outer_sensor.js');

const Inner_Todo = Inner_DATA;
const Outer_Todo = Outer_DATA;
// DATA terminal display

var Inner = new Object();
var Outer = new Object();
/* GET home page. */
router.get('/', (req, res, next) => {
    
    
    Inner_Todo.find({ },{_id:0}, function(err, todo) {
        if(err) throw err;
        console.log(todo);
        Inner = todo;
    }).limit(3).sort({$natural:-1});

    Outer_Todo.find({ },{_id:0}, function(err, todo) {
        if(err) throw err;
        console.log(todo);
        Outer = todo;
    }).limit(3).sort({$natural:-1});

    let In = JSON.stringify(Inner);
    let Out = JSON.stringify(Outer);
    
    res.json({In,Out});
    
    res.render('detail_air');
});


router.get('/whatstatus', (req, res, next) => {
    
    let In = JSON.stringify(Inner);
    let Out = JSON.stringify(Outer);
    
    res.json({In,Out});
    
});


module.exports = router;

