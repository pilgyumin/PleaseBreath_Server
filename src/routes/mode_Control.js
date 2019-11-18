import express from 'express'
import {mode_Control} from '../controllers/mode_Control.controller'
import http from 'http';
const fetch = require('node-fetch');
const router = express.Router()
let Status = require('../Model/DATA');

let pi_hostname = 'localhost';
let pi_port = '3000';
let pi_path = '/Mode/';

/* GET home page. */
router.get('/', (req, res, next) => {
    console.log('모드설정 진입');
    if(req.session.logined) {
        res.render('모드설정', { id: req.session.user_id, Status:Status });
    } else {
        res.locals.message = '잘못된 경로로 접속하였습니다.';

        const myError = new Error('you connect wrong URL');
        res.locals.error = myError;
        // render the error page
        res.status(404);
        res.render('error');
    }
});

router.get('/:mode', (req, res, next) => {
    let add_path = '';
    if(req.params.mode === 'normal'){
        add_path += "normal";
    }
    else if(req.params.mode === 'infacts'){
        add_path += "infacts";
    }
    else if(req.params.mode === 'senior'){
        add_path += "senior";
    }
    else if(req.params.mode === 'sleep'){
        add_path += "sleep";
    }

    /*else if(req.params.mode === 'turnOffSolution'){
        res.render('팝업_꺼짐예약설정', { id: req.session.user_id });
    }*/
    
    if(add_path != ''){
        fetch("http://" + pi_hostname + ":" + pi_port + pi_path + add_path, {
            method: 'get',
        })
            .then(res => res.json())
            .then(json => console.log(json));
        res.json({});
    }

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

