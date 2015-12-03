var Integration = require('./integration');
var inherits = require('inherits');
var assign = require('lodash/object/assign');
var request = require('../base/request');
var uber = require('node-uber');

// Uber Service
function Uber (options) {
  options = options || {};
  this.serverToken = 'hr_2wmSJ9wuVLBu-i885fR4SmfHLPByJM6tfhvTh';
}

inherits(Uber, Integration);

assign(Uber.prototype, {

  refreshToken: function (service, cb) {
    // check to see if this option is even provided
    // check token's validity
    // if valid, set the access_token as a property of this service and call callback
    this.accessToken = service.access_token;
    cb();
    // if NOT valid:
    //    - hit the refresh token endpoint
    //    - this.accessToken = newToken;
    //    - serviceData.update_attributes(access_token: newToken)
    //    - cb();
  },

  getHistory: function () {
    console.log('GETTING HISTORY');
  }

});

module.exports = Uber;

