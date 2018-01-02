'use strict';
const Note = require('../models').Note

//Create New Note On StudentLab
exports.create = (req,res) => {
  Note.create({
    note: req.body.note,
    StudentLabId: req.body.StudentLabId
  })
  .then((note)=>res.send(note))
}

//Update Student Note On StudentLab
exports.update = (req,res) => {
  Note.update({
    note: req.body.note,
    where:{
      id: req.params.id
    }
  })
}