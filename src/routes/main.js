import express from 'express'
import {main} from '../controllers/main.controller'

import fs from 'fs'

const router = express.Router()
const status = {
    tempOuter : "",
    tempInner : "",
    humidOuter : "",
    humidInner : "",
    pm10Outer : "",
    pm10Inner : "",
    pm25Outer : "",
    pm25Inner : "",
    vocOuter : "",
    vocInner : "",
};

/* GET home page. */
router.get('', (req, res, next) => {

    //temp
    if(req.query.tempOuter){
        fs.writeFile('./data/tempOuter.txt', req.query.tempOuter, (err , data) =>  {
            if(err){
                throw err;
            }
        });
    }
    if(req.query.tempInner){
        fs.writeFile('./data/tempInner.txt', req.query.tempInner, (err , data) =>  {
            if(err){
                throw err;
            }
        });
    }

    //humid
    if(req.query.humidOuter){
        fs.writeFile('./data/humidOuter.txt', req.query.humidOuter, (err , data) =>  {
            if(err){
                throw err;
            }
        });
    }
    if(req.query.humidInner){
        fs.writeFile('./data/humidInner.txt', req.query.humidInner, (err , data) =>  {
            if(err){
                throw err;
            }
        });
    }

    //pm10
    if(req.query.pm10Outer){
        fs.writeFile('./data/pm10Outer.txt', req.query.pm10Outer, (err , data) =>  {
            if(err){
                throw err;
            }
        });
    }
    if(req.query.pm10Inner){
        fs.writeFile('./data/pm10Inner.txt', req.query.pm10Inner, (err , data) =>  {
            if(err){
                throw err;
            }
        });
    }

    //pm2.5
    if(req.query.pm25Outer){
        fs.writeFile('./data/pm25Outer.txt', req.query.pm25Outer, (err , data) =>  {
            if(err){
                throw err;
            }
        });
    }
    if(req.query.pm25Inner){
        fs.writeFile('./data/pm25Inner.txt', req.query.pm25Inner, (err , data) =>  {
            if(err){
                throw err;
            }
        });
    }

    //voc
    if(req.query.vocOuter){
        fs.writeFile('./data/vocOuter.txt', req.query.vocOuter, (err , data) =>  {
            if(err){
                throw err;
            }
        });
    }
    if(req.query.vocInner){
        fs.writeFile('./data/vocInner.txt', req.query.vocInner, (err , data) =>  {
            if(err){
                throw err;
            }
        });
    }
    res.render('main');
});

router.get('/whatstatus', (req, res, next) => {
    console.log('main whatstatus in');
    //temp
    fs.readFile('./data/tempOuter.txt', (err,data) => {
        if (err) {
            throw err;
        }
        status.tempOuter = data.toString();
    });
    fs.readFile('./data/tempInner.txt', (err,data) => {
        if (err) {
            throw err;
        }
        status.tempInner = data.toString();
    });

    //humid
    fs.readFile('./data/humidOuter.txt', (err,data) => {
        if (err) {
            throw err;
        }
        status.humidOuter = data.toString();
    });
    fs.readFile('./data/humidInner.txt', (err,data) => {
        if (err) {
            throw err;
        }
        status.humidInner = data.toString();
    });

    //pm10
    fs.readFile('./data/pm10Outer.txt', (err,data) => {
        if (err) {
            throw err;
        }
        status.pm10Outer = data.toString();
    });
    fs.readFile('./data/pm10Inner.txt', (err,data) => {
        if (err) {
            throw err;
        }
        status.pm10Inner = data.toString();
    });

    //pm2.5
    fs.readFile('./data/pm25Outer.txt', (err,data) => {
        if (err) {
            throw err;
        }
        status.pm25Outer = data.toString();
    });
    fs.readFile('./data/pm25Inner.txt', (err,data) => {
        if (err) {
            throw err;
        }
        status.pm25Inner = data.toString();
    });

    //voc
    fs.readFile('./data/vocOuter.txt', (err,data) => {
        if (err) {
            throw err;
        }
        status.vocOuter = data.toString();
    });
    fs.readFile('./data/vocInner.txt', (err,data) => {
        if (err) {
            throw err;
        }
        status.vocInner = data.toString();
    });

    //외부, 내부 공기 상태를 JSON화시켜서 응답함
    res.json(JSON.stringify(status));
});

module.exports = router;