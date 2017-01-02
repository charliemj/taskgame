var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var validators = require('mongoose-validators');


var taskSchema = mongoose.Schema({
	text:String,
	points: Number
});

var Tasks = mongoose.model("Task", taskSchema);
module.exports = Tasks; //keep at bottom of file