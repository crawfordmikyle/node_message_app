'use strict';
const Comment = require('../models').Comment 

// Create New Comment On StudentLab
exports.create = (req,res) => {
  Comment.create({
    comment: req.body.comment,
    StudentLabId: req.body.StudentLabId
  })
  .then((comment)=>res.send(comment))
}
// Delete Comment On StudentLab
