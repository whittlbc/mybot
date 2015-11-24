var Session = require('../models/session');

new Session({'token': 'myToken'}).fetch({
  withRelated: ['user.patterns']
}).then(function (session) {
  var user = session.related('user').toJSON();
  var patterns = user.patterns;
  console.log('USER', user);
  console.log('PATTERNS', patterns);
});
