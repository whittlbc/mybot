var express = require('express');
var router = express.Router();

router.get('/getUserName', function(req, res){
	res.json({hey: 'there'});
});

module.exports = router;








