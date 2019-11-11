const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const User_Schema = new mongoose.Schema({
    id : {type : String, unique: true, require:true },
    password : {type : String, require: true},
    //salt : {type:String, required: true}
});


User_Schema.pre('save', function(next) {
    const user = this;
    const saltFactor = 10;
    bcrypt.genSalt(saltFactor, (err, salt) => { // Salt 생성
      if (err) {return next(err);}
   
      bcrypt.hash(user.password, salt, (err, hash) => {  // Hash생성
        console.log("TT");
        if (err) {return next(err);}
        user.password = hash;  // Hash값 pwd에 저장
        next();
      });
    });
  });

  User_Schema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User',User_Schema,'User');