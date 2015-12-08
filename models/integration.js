var bookshelf = require('../bookshelf');
var Service = require('./service');

var Integration = bookshelf.Model.extend({
  tableName: 'integrations',
  services: function() {
    return this.hasMany(Service);
  }
});

module.exports = Integration;