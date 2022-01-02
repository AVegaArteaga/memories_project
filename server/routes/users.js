import express from 'express';

import {signin,signup} from '../controllers/users.js'

const router = express.Router();


router.post('/signin', signin); //sends data to the backend, the form will send to the backend
router.post('/signup', signup); //sends data to the backend, the form will send to the backend

export default router;