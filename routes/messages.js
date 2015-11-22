var express = require('express');
var router = express.Router();
var Matcher = require('../matcher');

var NO_MATCH_MESSAGE = 'What the fuck did you just say?? I don\'t have a match for that...';

function getPatterns (req) {
  var session = Session.find_by(token: req.body.token);
  return session.user.patterns;
}

router.post('/', function (req, res) {
  var matcher = new Matcher({
    patterns: getPatterns(req)
  });
  var checkForMatch = matcher.perform();
  var response = checkForMatch.foundMatch ? checkForMatch.message : NO_MATCH_MESSAGE;
  res.send(response);
});



module.exports = router;