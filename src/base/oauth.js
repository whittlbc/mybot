var assign = require('lodash/object/assign');

function OAuth (options) {
  options = options || {};
}

assign(OAuth.prototype, {

  myFunc: function () {
    var self = this;

  }

});

module.exports = OAuth;
