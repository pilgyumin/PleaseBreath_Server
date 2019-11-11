const express = require('express');
const router = express.Router();

const User = require("./User");


router.get('/sign_up', function(req, res, next) {
  res.render("users/sign_up");
});

//웹페이지에서 라즈베리로
router.post("/sign_up", function(req,res,next){
  let body = req.body;
  
  console.log(User.find().where('').equals('test'));
  
  res.redirect("/");  
  /*.catch( err => {
    console.log(err)
  })*/
})

router.post('/check',(req,res,next)=>{
  
  
  let check_id = req.body.ID;
  

  User.countDocuments({id : check_id},function(err,count){
    console.log(count);
    res.json({count});
  })
  
  
  console.log(req.body);
  
});

router.post('/saved', (req, res, next) => {

  console.log(req.body);
  console.log('!!!');
  let Input = new User({id:req.body.id,  password : req.body.password});
  

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


module.exports = router;