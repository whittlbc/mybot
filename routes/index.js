var express = require('express');
var router = express.Router();
var Bot = require('../src/bot');

router.get('/', function(req, res) {

  var bot = new Bot();
  console.log('Number', bot.getNumber());

  res.render('index', { title: 'Express' });
});

module.exports = router;
