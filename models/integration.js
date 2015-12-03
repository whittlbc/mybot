var bookshelf = require('../bookshelf');
var Service = require('./service');

var Integration = bookshelf.Model.extend({
  tableName: 'integrations',
  services: function() {
    return this.hasMany(Service);
  }
});

module.exports = Integration;


new Integration({'token': req.body.token}).fetch({withRelated: ['user.patterns']}).then(function (session) {
  if (session) {
    cb(session.related('user').toJSON().patterns);
  }
});