var express = require('express');
var router = express.Router();
var Matcher = require('../src/matcher');
var Constants = require('../utils/constants');
var bookshelf = require('../bookshelf');
var Session = require('../models/session');

function getPatterns (req) {
  // find session by user token param
  var session = new Session({'token': req.body.token}).fetch();

  if (_.isEmpty(session)) {
    // some shit is wrong and session doesn't exist
  }
  // get the patterns for the user associated with the session
  return session[0].user.patterns;
}

router.post('/', function (req, res) {
  var matcher = new Matcher({
    patterns: getPatterns(req)
  });
  var checkForMatch = matcher.perform(req.body.text);
  var response = checkForMatch.foundMatch ? checkForMatch.message : Constants.NO_MATCH_MESSAGE;
  res.send(response);
});



module.exports = router;