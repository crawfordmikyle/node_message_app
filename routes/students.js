var express = require('express');
var router = express.Router();
const Student = require('../models').Student;

router.get('/', function(req, res, next) {
  Student.findAll({})
  .then((responce)=>res.send(responce))
});

router.post('/',function(req,res,next){
  Student.create({name: 'billy from the server'})
  .then((responce)=>res.send(responce))
});

router.get('/:id', function(req,res,next){
  Student.findAll({
    where:{id: req.params.id},
    include:['teacher']
  })
  .then((responce)=>res.send(responce))
});

module.exports = router;