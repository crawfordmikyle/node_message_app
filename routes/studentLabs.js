'use strict';
const express = require('express');
const router = express.Router();
const studentLabsController = require('../controllers/studentLabsController');

//index for dev only
router.get('/',studentLabsController.index);
//Show StudentLab By Id
router.get('/:id',studentLabsController.show)
//Create New StudentLab
router.post('/',studentLabsController.create);
//Delete Student Lab By Id
router.delete('/:id',studentLabsController.delete);

module.exports = router;