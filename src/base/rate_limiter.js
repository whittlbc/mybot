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
      };

      // if out of requests, log something on our end to have stats on how often this is happening
      if (rateRemaining == 0) {
        // logger.info('Rate Limit: Out of Requests');
      }
    }

    return relevantObj;
  }

});

module.exports = RateLimiter;

