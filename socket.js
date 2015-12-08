var assign = require('lodash/object/assign');
var HeyScript = require('./scripts/hey_script');
var scripts = [HeyScript];
var socket;

function Socket (server) {
  this.io = require('socket.io')(server);
}

assign(Socket.prototype, {

  configure: function () {
    var self = this;
    this.io.on('connection', function (s) {
      socket = s;
      socket.on('message', function (text) {
        for (var i = 0; i < scripts.length; i++) {
          if (self.checkForMatch(scripts[i], text)) {
            break;
          }
        }
      });
    });
  },

  checkForMatch: function (script, text) {
    script.respond = this.matchResponse;
    var matches = text.match(script.pattern);
    var matchExists = (matches != null);
    matchExists ? script.onMatch(matches, text) : this.noMatchResponse();
    return matchExists;
  },

  matchResponse: function (text) {
    socket.emit('response', text);
  },

  noMatchResponse: function () {
    socket.emit('response', 'No Match :(');
  }

});

module.exports = Socket;