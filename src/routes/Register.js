const express = require('express');
const router = express.Router();

const User = require("./User");


router.get('/sign_up', function(req, res, next) {
  res.render("users/sign_up");
});

//웹페이지에서 라즈베리로
router.post("/sign_up", function(req,res,next){
  let body = req.body;
  //User.findOne({nick: body.userName}, function(err,obj) { console.log(obj); });
  //console.log(User.find().equals('name', 'test'));
  console.log(User.find().where('name').equals('test'));
  
  //let Input_data = new User({name : body.userName, mail : body.userEmail, password : body.password});
  
  //console.log(123);
  //console.log(body);
  //console.log(body.userName);
  //User.find({'name': {'$regex': 'web' }})

  /*Input_data.save(function(error, data){
    if(error){
        console.log(error);
    }else{
        console.log(data);
        console.log('Saved!')
    }
  });*/

  /*models.user.create({
    name: body.userName,
    email: body.userEmail,
    password: body.password
  })*/
  
  res.redirect("/");  
  /*.catch( err => {
    console.log(err)
  })*/
})

module.exports = router;