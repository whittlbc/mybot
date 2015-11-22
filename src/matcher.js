var SuperClass = require('./superclass');
var inherits = require('inherits');
var assign = require('lodash/object/assign');
var integrationsMap = require('integrations').map;

// Matcher Class
function Matcher (options) {
  options = options || {};
  this.patterns = options.patterns; // array of Pattern objects
}

inherits(Matcher, SuperClass);

assign(Matcher.prototype, {

  perform: function () {
    var matchingPattern;

    // use for loop so that we have the options of breaking out early
    for (var i = 0; i < this.patterns.length; i++) {
      var pattern = this.patterns[i].pattern;

      // check pattern for regex match

      if (itMatches) {
        matchingPattern = pattern;
        break;
      }
    }

    if (matchingPattern) {
      this.foundMatch(matchingPattern);
      return {
        foundMatch: true,
        message: matchingPattern.match_message
      }
    } else {
      return { foundMatch: false };
    }
  },

  foundMatch: function (pattern) {
    var integration = pattern.integration;  // db query to get Integration object
    var Service = integrationsMap[integration.service]; // where .service is name of integration ('Uber', 'Google', etc.)
    var service = new Service();
    // refresh access_token if needed
    service.refreshToken(integration.access_token);
    // get the method that corresponds to this pattern
    var serviceMethod = pattern.action;
    // perform that action
    service[serviceMethod]();
  }

});

module.exports = Matcher;

