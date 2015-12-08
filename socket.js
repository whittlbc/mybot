var assign = require('lodash/object/assign');
var HeyScript = require('./scripts/hey_script');
var scripts = [HeyScript];
var socket;

var NO_MATCH_MESSAGE = 'Sorry, I don\'t have a command for that :(';

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
    script.respond = this.respond;
    var matches = text.match(script.pattern);
    var matchExists = (matches != null);
    matchExists ? script.onMatch(matches, text) : this.respond(NO_MATCH_MESSAGE);
    return matchExists;
  },

  respond: function (text) {
    socket.emit('response', text);
  }

});

module.exports = Socket;