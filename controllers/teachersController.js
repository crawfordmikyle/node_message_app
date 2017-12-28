const Teacher = require('../models').Teacher;

// Get All Teachers
exports.index = (req,res) => {
  Teacher.findAll({include:['students']})
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
  Teacher.findAll({where:{
    id: req.params.id
  }})
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