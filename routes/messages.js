var express = require('express');
var router = express.Router();
var Matcher = require('../src/matcher');
var Constants = require('../utils/constants');
var Session = require('../models/session');

function getPatterns (req, cb) {
  new Session({'token': req.body.token}).fetch({withRelated: ['user.patterns']}).then(function (session) {
    if (session) {
      cb(session.related('user').toJSON().patterns);
    }
  });
}

router.post('/', function (req, res) {
  getPatterns(req, function (patterns) {
    var matcher = new Matcher({
      patterns: patterns
    });
    var checkForMatch = matcher.perform(req.body.text);
    var response = checkForMatch.foundMatch ? checkForMatch.message : Constants.NO_MATCH_MESSAGE;
    res.send(response);
  });
});



module.exports = router;