var express = require('express');
var router = express.Router();
var Service = require('../models/service');
var Integration = require('../models/integration');
var knex = require('../knex');

function createNewPattern (data, serviceID, cb) {
  var regex = regexToStringComponents(data.regex);
  knex('patterns').insert({
    user_id: data.userID,
    service_id: serviceID,
    match_message: data.matchMessage,
    regex: regex
  }).catch(function(e) {
    console.error(e);
  }).then(function () {
    cb();
  });
}

function insertNewService (data, integrationID, cb) {
  var serviceData = {
    action_method: data.action,
    integration_id: integrationID
  };
  knex('services').insert(serviceData).catch(function(e) {
    console.error(e);
  }).then(function () {
    new Service(serviceData).fetch().then(function (service) {
      cb(service.id);
    });
  });
}

function getIntegrationID (data, cb) {
  new Integration({ 'name': data.integration }).fetch().then(function (integration) {
    cb(integration.id);
  });
}

function createNewService (data) {
  getIntegrationID(data, function (integrationID) {
    insertNewService(data, integrationID, function (serviceID) {
      createNewPattern(data, serviceID, function () {
        console.log('Successfully created new service!');
      });
    });
  });
}

function regexToStringComponents (regex) {
  var stringPattern = regex.toString();
  var endingSlashIndex = null;
  var pattern = '';
  var modifiers = '';

  for (var i = 0; i < stringPattern.length; i++) {
    var key = stringPattern[i];
    if (i >= 1) {
      // if key is '\', escape it with another one
      if (key === '\\') {
        pattern += '\\';
      } else {
        // if the key is the ending back slash, save that index
        if (key === '/') {
          endingSlashIndex = i;
        } else {
          if (endingSlashIndex === null) {
            pattern += key;
          } else {
            modifiers += key;
          }
        }
      }
    }
  }

  return {
    pattern: pattern,
    modifiers: modifiers
  };
}

createNewService({
  regex: /testing/,
  integration: 'Uber',
  action: 'another test',
  matchMessage: 'I heard a match!',
  userID: 1
});


module.exports = router;