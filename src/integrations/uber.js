var Integration = require('./integration');
var inherits = require('inherits');
var assign = require('lodash/object/assign');

// Uber Service
function Uber (options) {
  options = options || {};
}

inherits(Uber, Integration);

assign(Uber.prototype, {

  refreshToken: function (serviceData, cb) {
    // check to see if this option is even provided
    // check token's validity
    // if valid, set the access_token as a property of this service and call callback
    this.accessToken = serviceData.access_token;
    cb();
    // if NOT valid:
    //    - hit the refresh token endpoint
    //    - this.accessToken = newToken;
    //    - serviceData.update_attributes(access_token: newToken)
    //    - cb();
  }


});

module.exports = Uber;

