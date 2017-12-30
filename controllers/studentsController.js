const Student = require('../models').Student;
const Teacher = require('../models').Teacher;
// Get All Students
exports.index = (req,res) => {
  Student.findAll()
  .then((responce)=>res.send(responce))
  .catch((error)=>console.log(error))
};

// Create New Student
exports.create = (req,res) => {
  Student.create({
    name: req.body.name
  })
  .then((responce)=>res.send(responce))
  .catch((error)=>console.log(error))
};

// Show Student by Id
exports.show = (req,res) => {
  Student.findById(req.params.id)
  .then((responce)=>{
    if(responce.length === 0){
      return(res.send({message:'cant find user'}))
    } else {
      return(res.send(responce))
    }
  })
  .catch((error)=>console.log(error))
};

// Update Student by Id
exports.update = (req,res) => {
  Student.update({name:req.body.name},{where:{id:req.params.id}})
  //using 204 to be replaces with the updated object or object deleted
  .then((responce)=>res.sendStatus(204))
  .catch((error)=>console.log(error));
};

// Delete Student by Id
exports.delete = (req,res) => {
  Student.destroy({where:{
    id: req.params.id
  }})
  //using 204 to be replaces with the updated object or object deleted  
  .then((responce)=>res.sendStatus(204))
  .catch((error)=>console.log(error))
};

// Get Labs
exports.getStudentLabs = (req,res) => {
  Student.findOne({where:{
    id: req.params.id
  }})
  .then((student) => {
    student.getStudentLabs()
  })
  .then((studentLabs) => res.send(studentLabs))
}