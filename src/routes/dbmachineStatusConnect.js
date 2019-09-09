const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = () => {
    function connect() {

        mongoose.connect('mongodb://hak:123@54.180.29.217:27017/machineStatus?authSource=admin', function(err) {

            if (err) {
                console.error('mongodb connection error', err);
            }
            else{
                console.log('mongodb connected');
            }
        });
    }
    connect();
    mongoose.connection.on('disconnected', connect);

};