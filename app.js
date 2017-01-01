//setup
var express = require("express");
var app = express(); // create our app w/ express
var mongoose = require("mongoose");
var morgan = require("morgan");  //HTTP request logger middleware for node.js
var bodyParser = require("body-parser"); // pull information from HTML POST (express4)
var methodOverride = require("method-override"); // simulate DELETE and PUT (express4)
var fs = require('fs');

// configuration

mongoose.connect("mongodb://localhost/taskgame");

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({'extended':'true'}));
app.use(bodyParser.json());
app.use(bodyParser.json({type:'application/vnd.api+json'})); // parse application/vnd.api+json as json
app.use(methodOverride());
app.use(express.static(__dirname + '/public'));

//model

var Button = mongoose.model('Button',{
	text:String,
	points: Number
});

var Reward = mongoose.model('Reward',{
	text:String,
	cost: Number
});


//ROUTES

// Task routes

//get all task buttons
app.get("/api/buttons",function(req,res){
	// use mongoose to get all buttons in the database
});

//create a new button and send it back to button list after creation
app.post('/api/buttons',function(req,res){
	// create a button, information comes from AJAX request from Angular
});

//delete a button
app.delete('/api/buttons/:button_id',function(req,res){
	Button.remove({});
});

// Reward routes

//get all rewards
app.get("/api/rewards",function(req,res){
	// use mongoose to get all buttons in the database
});

//create a new reqard and send it back to reward list after creation
app.post('/api/rewards',function(req,res){
	// create a reward, information comes from AJAX request from Angular
});

//delete a reward
app.delete('/api/rewards/:rewards_id',function(req,res){
	Reward.remove({});
});


// APPLICATION **Important to define this after the API routes that are above (otherwise weird errors)**

app.get("",function(req,res){ 
    // load the single view file (angular will handle the page changes on the front-end)
    res.sendfile("./public/index.html"); 
});

// listen (start app with node server.js)

app.listen(8080);
console.log("App listening on port 8080");

