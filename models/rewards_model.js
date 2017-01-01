var mongoose = require('mongoose');
var ObjectId = mongoose.Schema.Types.ObjectId;
var validators = require('mongoose-validators');


var rewardSchema = mongoose.Schema({
	text:String,
	cost: Number
});


var Rewards = mongoose.model("Rewards", rewardSchema);
module.exports = Rewards; //keep at bottom of file