var bookshelf = require('../bookshelf');
var Pattern = require('./pattern');
var Integration = require('./integration');

var Service = bookshelf.Model.extend({
  tableName: 'services',
  patterns: function() {
    return this.hasMany(Pattern);
  },
  integration: function () {
    return this.belongsTo(Integration)
  }
});

module.exports = Service;