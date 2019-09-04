const mongoose = require('mongoose');
const sensorSchema = new mongoose.Schema({
    id : String,
    tempOuter: Number,
    tempInner : Number
});
module.exports = mongoose.model('User',sensorSchema);