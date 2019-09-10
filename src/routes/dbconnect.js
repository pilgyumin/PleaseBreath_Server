const mongoose = require('mongoose');
module.exports = () => {
    function connect() {
        mongoose.connect('mongodb://hak:123@54.180.29.217:27017/service?authSource=admin', function(err) {
            if (err) {
                console.error('mongodb connection error', err);
            }
            console.log('mongodb connected');
        });
    }
    connect();
    mongoose.connection.on('disconnected', connect);
    //require('./Innersensor.js'); // user.js는 나중에 만듭니다.
};