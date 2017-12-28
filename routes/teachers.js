var express = require('express');
var router = express.Router();
const Teacher = require('../models').Teacher;
const teachersController = require('../controllers/teachersController');

// index
router.get('/',teachersController.index)
// create
router.post('/',teachersController.create)
// show
router.get('/:id',teachersController.show)
//update

//delete

module.exports = router;