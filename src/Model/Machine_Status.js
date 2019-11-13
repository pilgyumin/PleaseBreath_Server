let status = {
    aircleaner_power : 0,
    airconditioner_power : 0,
    dehumidifier_power : 0,

    
    airconditioner_mode : Number,

    airconditioner_temp : {
        cold_temp : 18,
        warm_temp : 13,
    },
    
    airconditioner_speed : {
        cold_speed : 1,
        warm_speed : 1,
        dehumidity_speed : 1
    },
    aircleaner_speed : 1,
    dehumidifier_speed : 1,
};


module.exports = status;