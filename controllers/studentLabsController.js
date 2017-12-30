const StudentLab = require('../models').StudentLab;
const Student = require('../models').Studentl;
const Lab = require('../models').Lab;
//Index
exports.index = (req,res) => {
  StudentLab.findAll()
  .then((labs)=>res.send(labs))
};
//Create New Student Lab
exports.create = (req,res) => {
  StudentLab.create()
  .then((studentLab)=>res.send(studentLab))
};