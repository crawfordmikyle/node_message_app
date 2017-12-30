const express = require('express');
const router = express.Router();
const studentLabsController = require('../controllers/studentLabsController')
//index for dev only
router.get('/',studentLabsController.index)
//Create New Student Lab
router.post('/',studentLabsController.create)
//Delete Student Lab By Id

module.exports = router;