var Service = require('./service');
var inherits = require('inherits');
var assign = require('lodash/object/assign');

// Google Service
function Google (options) {
  options = options || {};
}

inherits(Google, Service);

assign(Google.prototype, {

});

module.exports = Google;

