var SuperClass = require('./superclass');
var inherits = require('inherits');
var assign = require('lodash/object/assign');
var integrationsMap = require('./integrations/map');

// Matcher Class
function Matcher (options) {
  options = options || {};
  this.patterns = options.patterns;
}

inherits(Matcher, SuperClass);

assign(Matcher.prototype, {

  perform: function (text) {
    var matchingPattern;

    // use for loop so that we have the options of breaking out early
    for (var i = 0; i < this.patterns.length; i++) {
      var pattern = this.patterns[i];
      if (text.match(pattern.regex) != null) {
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
    var service = pattern.service;
    var integration = integrationsMap[service.name](); // calling something like Uber() or Google(), etc.
    integration.refreshToken(service, function () {
      this[service.action_method]();
    });
  }

});

module.exports = Matcher;

