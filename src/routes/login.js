import express from 'express'
import {login} from '../controllers/login.controller'

const router = express.Router()

const mongoose = require('mongoose');
const User = require('./User.js');



/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('login');
});


router.post('/check',(req,res,next)=>{
  
  


  let check_id = req.body.idinput;
  console.log(check_id);
  let check_password = req.body.pwinput;

  User.countDocuments({id : check_id},function(err,count){
    console.log("c" + count);
    res.json({count});
  })
  
  
  console.log(req.body);
  
});
module.exports = router;

