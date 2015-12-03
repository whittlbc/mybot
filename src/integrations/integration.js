var assign = require('lodash/object/assign');

// Integration Class
function Integration (options) {
  options = options || {};
  this.extraTokens = {};
}

assign(Integration.prototype, {

  configure: function (data) {
    this.defineRequiredTokens(data);
    this.baseURL = data.base_url;
  },

  defineRequiredTokens: function (data) {
    this.clientID = data.client_id;
    this.clientSecret = data.client_id;
    if (!_.isEmpty(data.additional_tokens)) {
      for (var tokenName in data.additional_tokens) {
        this.extraTokens[tokenName] = data.additional_tokens[tokenName];
      }
    }
  }

});

module.exports = Integration;
