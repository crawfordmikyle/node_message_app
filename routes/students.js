'use strict';
const express = require('express');
const router = express.Router();
const Student = require('../models').Student;
const studentsController = require('../controllers/studentsController');

//index
router.get('/',studentsController.index);
//create
router.post('/',studentsController.create);
//show
router.get('/:id',studentsController.show);
//update
router.put('/:id',studentsController.update);
//delete
router.delete('/:id',studentsController.delete);

module.exports = router;