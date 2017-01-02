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


//ROUTES

var tasks = require('./routes/task_routes.js');
app.use('/tasks', tasks);

var rewards = require('./routes/rewards_routes.js');
app.use('/rewards', rewards);


// APPLICATION **Important to define this after the API routes that are above (otherwise weird errors)**

app.get("",function(req,res){ 
    // load the single view file (angular will handle the page changes on the front-end)
    res.sendfile("./public/index.html"); 
});

// listen (start app with node server.js)

app.listen(8080);
console.log("App listening on port 8080");

