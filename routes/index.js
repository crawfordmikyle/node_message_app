var express = require('express');
var router = express.Router();
const Teacher = require('../models').Teacher;

/* GET home page. */
router.get('/', function(req, res, next) {
  Teacher.findAll({include:['students']}).then((responce)=>res.send(responce))
});

module.exports = router;
