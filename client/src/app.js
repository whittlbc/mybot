define(function(require, module, exports) {
  var io = require('socket.io');
  var socket = io.connect('http://localhost:8080');
  socket.on('response', function (responseData) {
    console.log(responseData);
  });
  socket.emit('message', 'mytext');
});
