define(function(require, module, exports) {
  var io = require('socket.io');
  var socket = io.connect('https://protected-beyond-7873.herokuapp.com');
  //var socket = io.connect('http://localhost:3000');
  socket.on('response', function (responseData) {
    console.log(responseData);
  });
  socket.emit('message', 'mytext');
});
