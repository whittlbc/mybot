var bookshelf = require('../bookshelf');
var Session = require('./session');
var Pattern = require('./pattern');
var Service = require('./service');

var User = bookshelf.Model.extend({
  tableName: 'users',
  session: function() {
    return this.hasOne(Session);
  },
  patterns: function () {
    return this.hasMany(Pattern);
  },
  services: function () {
    return this.hasMany(Service).through(Pattern);
  }
});

module.exports = User;