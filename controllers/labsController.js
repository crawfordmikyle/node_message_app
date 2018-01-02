'use strict';
const Lab = require('../models').Lab;

// Get All Labs
exports.index = (req,res) => {
  Lab.findAll()
  .then((responce)=>res.send(responce))
  .catch((error)=>console.log(error))
};

// Create New Lab
exports.create = (req,res) => {
  Lab.create({
    title: req.body.title,
    body: req.body.body
  })
  .then((responce)=>res.send(responce))
  .catch((error)=>console.log(error))
};

// Show Lab by Id
exports.show = (req,res) => {
  Lab.findAll({where:{
    id: req.params.id
  }})
  .then((responce)=>{
    if(responce.length === 0){
      return(res.send({message:'cant find user'}))
    } else {
      return(res.send(responce))
    }
  })
  .catch((error)=>console.log(error))
};

// Update Lab by Id
exports.update = (req,res) => {
  Lab.update({
    title: req.body.title,
    body: req.body.body
  },{where:{id:req.params.id}})
  //using 204 to be replaces with the updated object or object deleted
  .then((responce)=>res.sendStatus(204))
  .catch((error)=>console.log(error));
};
// Delete Lab by Id
exports.delete = (req,res) => {
  Lab.destroy({where:{
    id: req.params.id
  }})
  //using 204 to be replaces with the updated object or object deleted  
  .then((responce)=>res.sendStatus(204))
  .catch((error)=>console.log(error));
};