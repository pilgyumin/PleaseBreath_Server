import express from 'express'
import {mode_Control} from '../controllers/mode_Control.controller'

const router = express.Router()
let Status = require('../Model/DATA');

let pi_server_Url = {
    hostname: '192.168.0.9',
    port: '3000',
    path : '/Mode/'
};

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('mode_Control',{Status:Status});
});

router.post('/Senior', (req, res, next) => {
    console.log('Senior Start..');
    pi_server_Url.path += "Senior";
    http.request(pi_server_Url).end();
    pi_server_Url.path = '/Mode/';
});

router.post('/Infants', (req, res, next) => {
    console.log('Infants Start..');
    pi_server_Url.path += "Infants";
    http.request(pi_server_Url).end();
    pi_server_Url.path = '/Mode/';
});

/*
function Judgment(){
    //setTimeout(function() {

        //while(1){
        //    if(Status.co2_Inner != " " && Status.co2_Outer != " ")
         //       break;
        Status = require('../Model/DATA');
       // }
    
        console.log(Status.co2_Inner);
        console.log(Status.co2_Outer);
    
        //실내 습도가 40 ~ 60%가 아닐 때
        //Post 방식으로 가습기에 요청
        if(parseInt(Status.humid_Inner) < 40){
            command = "/remoteControl/humidifiercontrol/speedup";
            send_Command(command);
        }
        else if (parseInt(Status.humid_Inner) > 60){
            command = "/remoteControl/humidifiercontrol/speeddown";
            send_Command(command);
        }
    
        //적정량의 습도면 가습기의 세기를 ???로 조절
        else if (parseInt(Status.humid_Inner) < 60 && parseInt(Status.humid_Inner) >= 40) {
    
        }
    
        //실내 온도가 26 ~ 28%이 아닐 때
        //Post 방식으로 에어컨에 요청
        if(parseInt(Status.humid_Inner) < 26){
            command = "/remoteControl/airconditionercontrol/speeddown";
            send_Command(command);
        }
    
        else if (parseInt(Status.humid_Inner) > 28){
            command = "/remoteControl/airconditionercontrol/speedup";
            send_Command(command);
        }
        //적정량의 온도면 에어컨을 ???로 조절
        else if(parseInt(Status.humid_Inner) <= 28 && parseInt(Status.humid_Inner) >= 26){
    
        }
    
    //    }, 3000);
}

*/
module.exports = router;

