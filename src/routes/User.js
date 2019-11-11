const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const User_Schema = new mongoose.Schema({
    id : String,
    password : {type : Number, require: true}
});

/*
User_Schema.pre('save', function(next) {
    const user = this;
    const saltFactor = 10;
    bcrypt.genSalt(saltFactor, (err, salt) => { // Salt 생성
      if (err) return next(err);
   
      bcrypt.hash(user.pwd, salt, (err, hash) => {  // Hash생성
        if (err) return next(err);
        user.pwd = hash;  // Hash값 pwd에 저장
        next();
      });
    });
  });
*/
module.exports = mongoose.model('User',User_Schema,'User');