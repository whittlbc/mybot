var bookshelf = require('../bookshelf');
var Service = require('./service');

var Pattern = bookshelf.Model.extend({
  tableName: 'patterns',
  service: function() {
    return this.hasOne(Service);
  }
});

module.exports = Pattern;