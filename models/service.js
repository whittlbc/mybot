var bookshelf = require('../bookshelf');
var Pattern = require('./pattern');

var Service = bookshelf.Model.extend({
  tableName: 'services',
  pattern: function() {
    return this.belongsTo(Pattern);
  }
});

module.exports = Service;