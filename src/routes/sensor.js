const mongoose = require('mongoose');
const sensorSchema = new mongoose.Schema({
    id : String,
    temp: Number,
    humid : Number,
    pm2: Number,
    pm10: Number,
});



module.exports = mongoose.model('Inner',sensorSchema,'Inner');

