'use strict';
const StudentLab = require('../models').StudentLab;
const Student = require('../models').Student;
const Lab = require('../models').Lab;
//Index
exports.index = (req,res) => {
  StudentLab.findAll({include:['Student','Lab','Note','Comments']})
  .then((labs)=>res.send(labs))
};

//Get StudentLab By ID
exports.show = (req,res) => {
  StudentLab.findById(req.params.id,{include:['Student','Lab','Note','Comments']})
  .then((studentLab)=>res.send(studentLab))
}

//Create New StudentLab
exports.create = (req,res) => {
  StudentLab.create({
    LabId: req.body.labId,
    StudentId: req.body.studentId
  })
  .then((studentLab)=>res.send(studentLab))
};

//Delete StudentLab By ID
exports.delete = (req,res) => {
  StudentLab.destroy({where:{
    id: req.params.id
  }})
  .then((responce)=>res.send({message: 'student lab deleted'}))
};