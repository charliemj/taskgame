// Reward routes
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Reward = require('../models/rewards_model.js');

//get all rewards
router.get("/",function(req,res){
	// use mongoose to get all buttons in the database
});

//create a new reqard and send it back to reward list after creation
router.post('/',function(req,res){
	// create a reward, information comes from AJAX request from Angular
});

//delete a reward
router.delete('/:rewards_id',function(req,res){
	Reward.remove({});
});

module.exports = router;
