var SuperClass = require('./superclass');
var inherits = require('inherits');
var assign = require('lodash/object/assign');
var integrationsMap = require('./integrations/map');
var Service = require('../models/service');

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
      var regex = new RegExp(pattern.regex.pattern, pattern.regex.modifiers);
      if (text.match(regex) != null) {
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
    new Service({id: pattern.service_id}).fetch({withRelated: ['integration']}).then(function (service) {
      var integration = service.related('integration').toJSON();
      var myIntegration = new (integrationsMap[integration.name])();
      var serviceData = service.toJSON();
      myIntegration.refreshToken(serviceData, function () {
        (myIntegration[serviceData.action_method])();
      });
    });
  }

});

module.exports = Matcher;


// FUNCTION TO USE WHEN SUBMITTING REGEX PATTERN

//function regexToStringComponents (regex) {
//  var stringPattern = regex.toString();
//  var endingSlashIndex = null;
//  var pattern = '';
//  var modifiers = '';
//
//  for (var i = 0; i < stringPattern.length; i++) {
//    var key = stringPattern[i];
//    if (i >= 1) {
//      // if key is '\', escape it with another one
//      if (key === '\\') {
//        pattern += '\\';
//      } else {
//        // if the key is the ending back slash, save that index
//        if (key === '/') {
//          endingSlashIndex = i;
//        } else {
//          if (endingSlashIndex === null) {
//            pattern += key;
//          } else {
//            modifiers += key;
//          }
//        }
//      }
//    }
//  }
//
//  return {
//    pattern: pattern,
//    modifiers: modifiers
//  };
//}
