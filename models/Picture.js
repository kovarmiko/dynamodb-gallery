//grab dependencies
var dynamoose = require('dynamoose');
var config = require('../config/AwsConfig');
dynamoose.AWS.config.update(config);

//create gallery table if doesn't exists
var Picture = dynamoose.model('Picture', {
	_id: Number, 
	title: String, 
	gallery: String,
	owner: String,
	url: String,
	uploaded: String 
});

// make this available to our users in our Node applications
module.exports = Picture;