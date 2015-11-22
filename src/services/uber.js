var Service = require('./service');
var inherits = require('inherits');
var assign = require('lodash/object/assign');

// Uber Service
function Uber (options) {
  options = options || {};
}

inherits(Uber, Service);

assign(Uber.prototype, {

});

module.exports = Uber;

