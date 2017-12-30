const StudentLab = require('../models').StudentLab;
var Student = require('../models').Student;
var Lab = require('../models').Lab;
//Index
exports.index = (req,res) => {
  StudentLab.findAll({include:['Student','Lab']})
  .then((labs)=>res.send(labs))
};

//Create New Student Lab
exports.create = (req,res) => {
  StudentLab.create({
    LabId: req.body.labId,
    StudentId: req.body.studentId
  })
  .then((studentLab)=>res.send(studentLab))
};

//Delete Student Lab By ID
exports.delete = (req,res) => {
  StudentLab.destroy({where:{
    id: req.params.id
  }})
  .then((responce)=>res.send({message: 'student lab deleted'}))
};