var knex = require('../knex');

knex.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.string('email');
  table.string('password');
  table.timestamps();
}).catch(function(e) {
  console.error(e);
});