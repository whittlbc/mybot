var assign = require('lodash/object/assign');

function RateLimiter (options) {
  options = options || {};
}

assign(RateLimiter.prototype, {

  isRelevant: function (response) {
    var rateLimit = response.headers['X-Rate-Limit-Limit'];
    var rateRemaining = response.headers['X-Rate-Limit-Remaining'];
    var rateReset = response.headers['X-Rate-Limit-Reset'];
    var relevantObj = {
      relevant: false
    };

    if (rateLimit || rateRemaining || rateReset) {
      relevantObj.relevant = true;
      relevantObj.data = {
        limit: rateLimit,
        remaining: rateRemaining,
        reset: rateReset
      }
    }

    return relevantObj;
  }

});

module.exports = RateLimiter;

