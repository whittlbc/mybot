var assign = require('lodash/object/assign');
var Request = require('./request');

function OAuth (options) {
  options = options || {};
  this.request = new Request();
}

assign(OAuth.prototype, {

  // hit endpoint to login, should receive the temp token
  authorize: function () {
    var self = this;
    // get correct endpoint
    // get correct scopes?
    // get correct redirect_url
    // get correct header structure
    // requestAccessToken(response);
  },

  requestAccessToken: function (response) {
    var self = this;
    // strip out the temp token from whatever data is passed in
    // get correct endpoint
    // get correct header structure
    // make request
    // return accessToken; --> store it for that user from the file that called this method in the first place
  },

  refreshToken: function () {
    var self = this;
    // get correct endpoint
    // get correct header structure
    // make request
  }

});

module.exports = OAuth;

