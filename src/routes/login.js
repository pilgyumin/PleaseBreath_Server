import express from 'express'
import {login} from '../controllers/login.controller'

const router = express.Router()

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('login');
});

module.exports = router;

