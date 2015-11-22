var assign = require('lodash/object/assign');


// Bot Class
function Bot(options) {
  options = options || {};
}

assign(Bot.prototype, {

  getNumber: function () {
    var self = this;
    return 4;
  }

});

module.exports = Bot;

