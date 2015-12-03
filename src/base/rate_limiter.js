var assign = require('lodash/object/assign');

function RateLimiter (options) {
  options = options || {};
}

assign(RateLimiter.prototype, {

  myFunc: function () {
    var self = this;

  }

});

module.exports = RateLimiter;

