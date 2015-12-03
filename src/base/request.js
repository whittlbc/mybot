var assign = require('lodash/object/assign');
var request = require('request');
var RateLimiter = require('./rate_limiter');

function Request (options) {
  options = options || {};
  this.rateLimiter = new RateLimiter();
}

assign(Request.prototype, {

  makeRequest: function (url, method, data, options) {
    options = options || {};
    var self = this;

    var data = {
      url: url,
      method: method,
      json: data
    };

    request(data, function (error, response, body) {
      if (error || response.statusCode != 200) {
        if (options.error) {
          options.error(JSON.parse(error));
        }
      } else {
        if (options.success) {
          var successData = {
            response: JSON.parse(body)
          };
          var rateLimitObj = self.rateLimiter.isRelevant(response);
          if (rateLimitObj.relevant) {
            successData.rateLimitData = rateLimitObj.data;
          }
          options.success(successData);
        }
      }
    });
  },

  get: function (url, data, options) {
    this.makeRequest(url, 'GET', data, options);
  },

  put: function (url, data, options) {
    this.makeRequest(url, 'PUT', data, options);
  },

  post: function (url, data, options) {
    this.makeRequest(url, 'POST', data, options);
  },

  delete: function (url, data, options) {
    this.makeRequest(url, 'DELETE', data, options);
  }

});

module.exports = Request;

