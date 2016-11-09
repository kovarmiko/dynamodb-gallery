'use strict';
var express = require('express');
var router = express.Router();

var jwt = require('jsonwebtoken');
var config = require('../config/config.js');
var crudOps = require('../crudOps');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('login', {});
});

router.post('/', function(req, res, next) {
  let credentials = {
  	username: req.body.username,
  	password : req.body.password
  }
  console.dir(credentials);

  crudOps.model.readByCondition('User', {username: {eq: req.body.password}}, (err, user) => {
  	console.log('user');
    
    //convert non-sense to readable data
    let userData=JSON.parse(JSON.stringify(user))[0];
    console.log(userData);
  	
    if (err) throw err;
  	
  	if (!user){
		  res.json({ success: false, message: 'Authentication failed. User not found.' });
		return;
  	}
    console.log('user');
    console.log(credentials);
  	if (userData.password !== credentials.password) {
        res.json({ success: false, message: 'Authentication failed. Wrong password.' });
        return;
    }
    
    let token = jwt.sign(userData, config.secret, {
          expiresIn : 60*60*24
    });

    res.cookie('token', token, { maxAge: 100*60*60*24, httpOnly: false });
    
    if (req.query.json) {
      res.json({
        success: true,
        message: 'Enjoy your token!',
        token: token    	
    	});
    	return;
    }
    
    res.render('login', {}); 
	});
});

module.exports = router;