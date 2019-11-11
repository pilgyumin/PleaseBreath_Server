import express from 'express'
import {login} from '../controllers/login.controller'

const router = express.Router()
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./User.js');
let Pass = false;


/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('login');
});


router.post('/check',(req,res,next)=>{
  
  

    User.findOne({ id: req.body.id }, function(err, user) {
      if (err) throw err;
      else if(user == null) res.json({Pass});
      else{
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) throw err;
            res.json({isMatch});
        });
      }
  });


});
module.exports = router;

