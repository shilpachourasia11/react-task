var controller = require('./workSpace.controller.js');
var express = require('express');
var router = express.Router();

router.get('/getAllWorkspaces', controller.getAllWorkspaces)
router.post('/changeAvailability', controller.changeAvailability)

module.exports = router;
