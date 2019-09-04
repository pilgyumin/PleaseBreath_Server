const mongoose = require('mongoose');
module.exports = () => {
    function connect() {
        mongoose.connect('mongodb://hak:123@54.180.29.217:27017', function(err) {
            if (err) {
                console.error('mongodb connection error', err);
            }
            console.log('mongodb connected');
        });
    }
    connect();
    mongoose.connection.on('disconnected', connect);
    require('./sensor.js'); // user.js는 나중에 만듭니다.
};