'use strict';
const Teacher = require('../models').Teacher;
const Student = require('../models').Student;

// Get All Teachers
exports.index = (req,res) => {
  Teacher.findAll()
  .then((responce)=>res.send(responce))
  .catch((error)=>console.log(error));
};

// Create New Teacher
exports.create = (req,res) => {
  Teacher.create({
    name: req.body.name
  })
  .then((responce)=>res.send(responce))
  .catch((error)=>console.log(error));
};

// Get Teacher by ID
exports.show = (req,res) => {
  Teacher.findById(req.params.id,{
    include:['students']
  })
  .then((responce)=>{
    if(responce.length === 0){
      return(res.send({message:'cant find user'}));
    } else {
      return(res.send(responce));
    }
  })
  .catch((error)=>console.log(error))
};

//Update Teacher by ID
exports.update = (req,res) => {
  Teacher.update({name:req.body.name},{where:{id:req.params.id}})
  //using 204 to be replaces with the updated object or object deleted
  .then((responce)=>res.sendStatus(204))
  .catch((error)=>console.log(error));
};

//Delete Teacher by ID
exports.delete = (req,res) => {
  Teacher.destroy({where:{
    id: req.params.id
  }})
  //using 204 to be replaces with the updated object or object deleted  
  .then((responce)=>res.sendStatus(204))
  .catch((error)=>console.log(error));
};

//Assign Student
exports.assignStudent = (req,res) => {
  Teacher.findOne({where:{
    id: req.params.id
  }})
  .then((teacher)=>{
    Student.findOne({where:{
      id: req.body.studentId
    }})
    .then((student)=>{
      teacher.addStudent(student)
    })
    .then((responce)=>res.send(responce))
  })
}
