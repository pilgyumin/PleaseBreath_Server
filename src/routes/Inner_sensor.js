const mongoose = require('mongoose');
const sensor_Schema = new mongoose.Schema({
    id : String,
    temp: Number,
    humid : Number,
    pm25: Number,
    pm10: Number,
    voc: Number,
    co2: Number,
    year: Number,
    month: Number,
    date: Number,
    hours: Number,
    minute: Number,
    second: Number
});


module.exports = mongoose.model('Inner',sensor_Schema,'Inner');