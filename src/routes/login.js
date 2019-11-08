import express from 'express'
import {login} from '../controllers/login.controller'

const router = express.Router()

const mongoose = require('mongoose');
const User = require('./User.js');



/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('login');
});

router.post('/', (req, res, next) => {
  console.log(req.body);
 
  let Input = new User({id:"User",name: req.body.name, mail: req.body.Email,password : req.body.password});
  

  Input.save(function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
        console.log('Saved!')
        res.json({});
    }
  });

});

router.post('/check',(req,res,next)=>{
  
  let check_Email = req.body.Email;

  User.countDocuments({mail : check_Email},function(err,count){
    console.log(count);
    res.json({count});
  })
  
  
  console.log(req.body);
  
 // res.json({});
});
module.exports = router;

