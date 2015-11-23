var Integration = require('./integration');
var inherits = require('inherits');
var assign = require('lodash/object/assign');

// Google Service
function Google (options) {
  options = options || {};
}

inherits(Google, Integration);

assign(Google.prototype, {

});

module.exports = Google;

