import express from 'express';
import router from express.Router();

import { loginCtrl, registerCtrl } from '../controllers/auth';

router.post('/login', loginCtrl)

router.post('/register', registerCtrl)

module.exports = router