var assign = require('lodash/object/assign');
var request = require('request');

// Request Class
function Request (options) {
  options = options || {};
}

assign(Request.prototype, {

  makeRequest: function (url, method, data, options) {
    options = options || {};

    var data = {
      url: url,
      method: method,
      json: data
    };

    request(data, function (error, response, body) {
      if (error) {
        if (options.error) {
          options.error();
        }
      } else {
        if (options.success) {
          options.success();
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

