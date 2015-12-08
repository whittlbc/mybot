var Listener = require('./listener');
var inherits = require('inherits');
var assign = require('lodash/object/assign');

function HeyScript (socket) {
  this.socket = socket;
}

inherits(HeyScript, Listener);

assign(HeyScript.prototype, {

  register: function () {
    var self = this;
    this.hear(/hey/i, function (matches, text) {
      self.socket.emit('response', 'HEARD HEY!');
    });
  }

});

module.exports = HeyScript;