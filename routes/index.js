let express = require('express');
let router = express.Router();
let recipe = require('../data/recipe');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'Chicken Tikka Masala',
  	recipe: recipe
  });
});

router.get('/Eggs-Benedict', function(req, res, next) {
	res.render('index', {
		title: 'Eggs Benedict',
		recipe: recipe
	});
});

router.get('/Crawfish-Etouffee', function(req, res, next) {
	res.render('index', {
		title: 'Crawfish Etouffee',
		recipe: recipe
	});
});

router.get('/Swedish-Meatballs', function(req, res, next) {
	res.render('index', {
		title: 'Swedish Meatballs',
		recipe: recipe
	});
});



module.exports = router;
