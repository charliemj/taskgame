var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var validators = require('mongoose-validators');
var Reward = require("./rewards_model.js");
var Task = require("./tasks_model.js");

var pointsSchema = mongoose.Schema({
    points: Number,
});


pointsSchema.statics.getPoints = function(callback){
    Points.findOne({},function(err, points){
        if (err){
            callback(err, points);
        }
        else if (points === null){
            //initialize points at 0
            Points.create({points: 0},
            function(err,points){
                callback(err, points);
            });//end create
        }//end else if
        else{//points exist in the db already
            callback(null,points);
        }//end else
    });//end findOne
};//end getPoints

pointsSchema.statics.addPoints = function(taskId,pointsId,callback){
    Task.findOne({_id: taskId}, function(err,task){
        if(err){
            callback(err);
        }//end if
        else{
            Points.findOneAndUpdate({_id: pointsId}, 
            { $inc: { points: task.points }}, callback);//end FOAU
        }//end else
    });//end findOne
};//end addPoints

pointsSchema.statics.subtractPoints = function(rewardId, pointsId, callback){
    Reward.findOne({_id: rewardId}, function(err,reward){
        if(err){
            callback(err);
        }//end if
        else{
            Points.findOneAndUpdate({_id: pointsId}, 
            { $inc: { points: -reward.cost }}, callback);//end FOAU
        }//end else
    });//end findOne
};//end subtractPoints

var Points = mongoose.model("Points", pointsSchema);
module.exports = Points; //keep at bottom of file