'use strict';
const express = require('express');
const router = express.Router();
const Labs = require('../models').Labs;
const labsController = require('../controllers/labsController')

//index
router.get('/',labsController.index);
//create
router.post('/',labsController.create);
//show
router.get('/:id',labsController.show);
//update
router.put('/:id',labsController.update);
//delete
router.delete('/:id',labsController.delete);

module.exports = router;