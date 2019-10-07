const mongoose = require('mongoose');
const sensor_Schema = new mongoose.Schema({
    id : String,
    temp: Number,
    humid : Number,
    pm25: Number,
    pm10: Number,
    voc: Number
});


module.exports = mongoose.model('Outer',sensor_Schema,'Outer');



