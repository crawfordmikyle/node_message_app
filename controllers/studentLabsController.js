const StudentLab = require('../models').StudentLab;
const Student = require('../models').Studentl;
const Lab = require('../models').Lab;
//Index
exports.index = (req,res) => {
  StudentLab.findAll({include:['Student','Lab']})
  .then((labs)=>res.send(labs))
};
//Create New Student Lab
exports.create = (req,res) => {
  StudentLab.create({
    Student: 1,
    Lab: 1
  })
  .then((studentLab)=>res.send(studentLab))
};