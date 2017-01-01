// Task Button routes
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Button = require('../models/buttons_model.js');


//get all task buttons
router.get("/",function(req,res){
	// use mongoose to get all buttons in the database
});

//create a new button and send it back to button list after creation
router.post('/',function(req,res){
	// create a button, information comes from AJAX request from Angular
});

//delete a button
router.delete('/:button_id',function(req,res){
	Button.remove({});
});

module.exports = router;
