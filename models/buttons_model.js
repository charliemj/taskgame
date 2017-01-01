var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var validators = require('mongoose-validators');


var buttonSchema = mongoose.Schema({
	text:String,
	points: Number
});

var Buttons = mongoose.model("Buttons", buttonSchema);
module.exports = Buttons; //keep at bottom of file