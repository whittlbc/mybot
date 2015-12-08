var assign = require('lodash/object/assign');

function Listener (options) {
  options = options || {};
}

assign(Listener.prototype, {

  hear: function (regex, cb) {
    var self = this;
    this.socket.on('message', function (text) {
      console.log('heard message');
      var matches = text.match(regex);
      if (matches != null) {
        console.log('found match');
        cb(matches, text);
      } else {
        self.socket.emit('response', 'No Match :(');
      }
    });
  }

});

module.exports = Listener;

