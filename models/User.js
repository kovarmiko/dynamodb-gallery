//grab dependencies
var dynamoose = require('dynamoose');
var config = require('../config/AwsConfig');
dynamoose.AWS.config.update(config);

//create gallery table if doesn't exists
var User = dynamoose.model('User', {
	"_id": Number, 
	username: {
    	type: String,
    	rangeKey: true,
    	index: true // name: nameLocalIndex, ProjectionType: ALL
  	},
	password: String,
	admin: Boolean,
	roles: Array 
});

// make this available to our Users in our Node applications
module.exports = User;