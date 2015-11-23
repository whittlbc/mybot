var Uber = require('./uber');
var Google = require('./google');

var Map = {
  'Google': Google,
  'Uber': Uber
};

module.exports = Map;

