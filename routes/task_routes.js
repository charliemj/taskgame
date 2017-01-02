// Task routes
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Task = require('../models/tasks_model.js');
var Points = require("../models/point_total_model.js");

//get all tasks
router.get("/",function(req,res){
	// use mongoose to get all tasks in the database
    Task.find(function(err,tasks){
        if (err){
            res.send(err);
        }//end if
        else{
            res.json(tasks);
        }//end else
    });//end find
});

//create a new task and send it back to task list after creation
router.post('/',function(req,res){
	// create a task, information comes from AJAX request from Angular
    Task.create({
        text: req.body.text,
        points: req.body.points
    }, function(err, task){
        if(err){
            res.send(err);
        }//end if
        else{
        // get and return all the tasks after you create another
            Task.find(function(err, tasks){
                if (err){
                    res.send(err);
                }//end if
                else{
                    res.json(tasks);
                }//end else
            });//end find
        }//end else
    });//end create
});

//delete a task
router.delete('/:task_id',function(req,res){
    //update the point total
    Task.findOne({_id : req.params.task_id},function(err,task){
        if (err){
            res.send(err);
        }//end if
        else{
            Points.getPoints(function(err,points){
                Points.addPoints(req.params.task_id, points._id,function(err,points){
                    //delete the task
                    Task.remove({
                        _id : req.params.task_id
                    }, function(err, task){
                        if (err){
                            res.send(err);
                        }//end if
                        else{
                            // get and return all the tasks after you delete one
                            Task.find(function(err, tasks){
                                if(err){
                                    res.send(err);
                                }//end if
                                else{
                                    res.json([tasks,points]);
                                }//end else
                            });//end find 
                        }//end else
                    });//end remove
                });//end addPoints
            });//end getPoints
        }//end else
    });//end findOne

    
});

module.exports = router;
