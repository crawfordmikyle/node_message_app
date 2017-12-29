var express = require('express');
var router = express.Router();
const Teacher = require('../models').Teacher;
const teachersController = require('../controllers/teachersController');

//index
router.get('/',teachersController.index);
//create
router.post('/',teachersController.create);
//show
router.get('/:id',teachersController.show);
//update
router.put('/:id',teachersController.update);
//delete
router.delete('/:id',teachersController.delete);
//addStudent
router.put('/:id/students',teachersController.addStudent);

module.exports = router;