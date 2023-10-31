// This file basically contain the route with related controller method

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { authController } = require('./../Controllers');
const validateRequired = require('../Middlewares/validate.required');



// here route register with registerUser controller method
router.post('/register', validateRequired, authController.registerUser)

// here route with login controller method
router.post('/login-user', validateRequired, authController.login);



// module exports router;
module.exports = router;