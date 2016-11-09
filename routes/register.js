'use strict';
var express = require('express');
var router = express.Router();
var crudOps = require('../crudOps');

router.get('/', function(req, res, next) {
	res.render('register', {});
});

router.post('/', function(req, res, next) {
	crudOps.model.readByCondition('User', {'username' : req.body.username}, (err, user) => {
		console.dir(user);
		if (user && user.username){
			return res.json({
				success: false,
				message: 'user with this username already exists'
			});
		} else {
			
			let data = {
				username: req.body.username,
				password: req.body.password
			};
			console.log('data');
			console.dir(data);

			crudOps.model.create('User', data, (err, user) => {
            if (err){
            	console.dir('err creating a user');
            	console.dir(err);
                res.status(500);
                res.json({error: "Internal Server Error"});
                return;
            }
            if (req.query.json){
                res.json(user);
                return;
            }
            
            res.render('register', {});
        });	
		} 	
	})
});

module.exports = router;