var bookshelf = require('../bookshelf');
var User = require('./user');

var Session = bookshelf.Model.extend({
  tableName: 'sessions',
  user: function() {
    return this.belongsTo(User);
  }
});

module.exports = Session;