var knex = require('../knex');

knex.schema.createTable('sessions', function (table) {
  table.increments();
  table.integer('user_id');
  table.timestamps();
  console.log('created table');
}).catch(function(e) {
  console.error(e);
});