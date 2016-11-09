//fetch dependencies
var User = require('./models/User');
var Gallery = require('./models/Gallery')
var Picture = require('./models/Picture');

//get models in one object
var Models = {User, Picture, Gallery};

module.exports = {
	model : {
		create: (model, data, clb) => {//ok
			if(!data["_id"]){
				data["_id"] = Date.now();
			}
			var entry = new Models[model](data);
			entry.save(function(err){
				if(err){
					console.dir(err);
				}
			});
			clb(null, entry);

		},
		read : (model, id, clb) => {
			Models[model].get({_id : id }, clb);
		},
		readByCondition : (model, condition, clb) => {//ok for person login
			Models[model].scan(condition, clb);
		},
		readAllByCondition : (model, condition, clb) => {
			Models[model].batchGet(condition, clb);
		},
		update:(model, id, data, clb) => {
			console.log('data');
			console.dir(data);
			var model = new Models[model](data);

			model.save({conditionValues: { _id: id }}, clb);
		},
		delete : (model, id, clb) => {
			Models[model].delete({ _id : id }, clb ); //clb parameters (error, doc, result)
		},
		all : (model, clb) => {
			Models[model].scan().exec(clb);
		}
	},
	apiCallback: (req, res, redirect) => {
		return (err, model) => {
			if (err){
			console.log(err);
			res.status(500);
			res.send('server encountered an unexpected error');
			return;	
			}
			if (req.query.json){
				return res.json({model});

			}
			if (redirect){
				res.redirect(redirect);
			}
		}		
	}
}