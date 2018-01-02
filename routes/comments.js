const express = require('express');
const router = express.Router();
const Labs = require('../models').Comment;
const commentsController = require('../controllers/commentsController')
//Create New Comment On StudentLab
router.post('/',commentsController.create)
//Delete A Comment On StudentLab

module.exports = router;