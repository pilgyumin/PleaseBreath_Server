import express from 'express'
import {login} from '../controllers/login.controller'

const router = express.Router()
const bcrypt = require('bcrypt');
const mongoose = require('mongoose');
const User = require('./User.js');
let Pass = false;
const session = require('express-session');

const UserSchema = mongoose.Schema({
    user_id: String,
    password: String
});


/* GET home page. */
router.get('/', (req, res, next) => {
    /*if(req.session.logined) {
        res.render('메인', { id: req.session.user_id });
    } else {*/
        res.render('로그인');
    //}
});

router.get('/logout', (req, res, next) => {
    if(req.session.logined) {
        req.session.destroy();
    }
    res.redirect('/');
});


router.post('/check',(req,res,next)=>{

    User.findOne({ id: req.body.id }, function(err, user) {
      if (err) throw err;
      else if(user == null) res.json({Pass});
      else{
        user.comparePassword(req.body.password, function(err, isMatch) {
            if (err) throw err;
            req.session.logined = true;
            req.session.user_id = req.body.id;
            res.json({isMatch});
        });
      }
  });


});
module.exports = router;

