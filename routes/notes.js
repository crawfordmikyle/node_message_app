'use strict';
const express = require('express');
const router = express.Router();
const notesController = require('../controllers/notesController')
//Create
router.post('/',notesController.create)

module.exports = router;
