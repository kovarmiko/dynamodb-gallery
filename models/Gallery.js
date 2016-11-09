//grab dependencies
var dynamoose = require('dynamoose');
var config = require('../config/AwsConfig');
dynamoose.AWS.config.update(config);

//create gallery table if doesn't exists
var Gallery = dynamoose.model('Gallery', {
	_id: Number, title: String, owner: String, created: String 
});

// make this available to our users in our Node applications
module.exports = Gallery;