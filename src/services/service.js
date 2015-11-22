var assign = require('lodash/object/assign');

// Service Class
function Service (options) {
  options = options || {};
}

assign(Service.prototype, {

  refreshToken: function (token) {
    // check token's validity and request new one if not valid
  }

});

module.exports = Service;

