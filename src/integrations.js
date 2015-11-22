var Uber = require('./services/uber');
var Google = require('./services/google');

var Integrations = {

  map: {
    'Google': Google,
    'Uber': Uber
  }

};


module.exports = Integrations;