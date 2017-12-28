const Teacher = require('../models').Teacher;

// Get All Teachers
exports.index = (req,res) => {
  Teacher.findAll({include:['students']}).then((responce)=>res.send(responce))
};

// Create New Teacher
exports.create = (req,res) => {
  Teacher.create({
    name: req.body.name
  })
  .then((responce)=>res.send(responce));
};

// Get Teacher by ID
exports.show = (req,res) => {
  Teacher.findAll({where:{
    id: req.params.id
  }}).then((responce)=>res.send(responce));
};

//Update Teacher by ID
exports.update = (req,res) => {
  Teacher.update({name:req.body.name},{where:{id:req.params.id}})
  // This is updating but only returning an array with the number 1 ?
  .then(updatedTeacher=>res.send(updatedTeacher));
};

//Delete Teacher by ID
exports.delete = (req,res) => {
  Teacher.destroy({where:{
    id: req.params.id
  }}).then((responce)=>res.sendStatus(responce));
};