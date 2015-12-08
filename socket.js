var assign = require('lodash/object/assign');
var HeyScript = require('./scripts/hey_script');
var scripts = [HeyScript];

function Socket (server) {
  this.io = require('socket.io')(server);
}

assign(Socket.prototype, {

  configure: function () {
    this.io.on('connection', function (socket) {
      for (var i = 0; i < scripts.length; i++) {
        var script = new (scripts[i])(socket);
        script.register();
      }
    });
  }

});

module.exports = Socket;