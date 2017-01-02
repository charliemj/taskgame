// Points routes
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Task = require('../models/tasks_model.js');
var Rewards = require('../models/rewards_model.js');
var Points = require("../models/point_total_model.js");


//get points
router.get("/",function(req,res){
    // use mongoose to get points from the database
    Points.getPoints(function(err,points){
        if (err){
            res.send(err);
        }//end if
        else{
            res.json(points);
        }//end else
    });//end getPoints
});


module.exports = router;
