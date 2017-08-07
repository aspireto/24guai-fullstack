var router = require('express').Router();


router.route('/')
	  .get(function(req, res){
			res.json(req.session.sign);
		});


module.exports = router;
