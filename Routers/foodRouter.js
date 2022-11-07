const express = require('express');
const router = express.Router();

const foodController = require('../Controllers/foodController');

router.use(express.json());

router.post('/', foodController.createFood);

module.exports = router;
