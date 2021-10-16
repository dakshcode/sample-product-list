const express = require('express');
const carController = require('../Controllers/car.controller');
const router = express.Router();

//router.post('/signup', userControllers.userRegister);
router.get('/', carController.index);
router.get('/dealer/:id', carController.dealer);

module.exports = router