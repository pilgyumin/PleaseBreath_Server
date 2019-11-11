const mongoose = require('mongoose');
const User_Schema = new mongoose.Schema({
    name : String,
    mail : String,
    password : Number
});


module.exports = mongoose.model('User',User_Schema,'User');