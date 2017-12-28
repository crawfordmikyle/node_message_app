var express = require('express');
var router = express.Router();
const Teacher = require('../models').Teacher;

router.get('/', function(req, res, next) {
  Teacher.findAll({include:['students']}).then((responce)=>res.send(responce))
});

router.post('/',function(req,res,next){
  Teacher.create({
    name: req.body.name
  })
  .then((responce)=>res.send(responce))
})

router.get('/:id', function(req,res,next){
  Teacher.findAll({where:{
    id: req.params.id
  }}).then((responce)=>res.send(responce))
});

module.exports = router;