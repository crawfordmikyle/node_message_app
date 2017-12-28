var express = require('express');
var router = express.Router();
var Labs = require('../models').Labs;

router.get('/labs',function(req,res,next){
  Labs.findAll({})
  .then((responce) => res.send(responce))
})


module.exports = router;