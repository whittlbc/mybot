var knex = require('../knex');

knex.schema.createTable('patterns', function (table) {
  table.increments();
  table.integer('user_id');
  table.integer('service_id');
  table.text('match_message');
  table.boolean('is_destroyed');
  table.timestamps();
  console.log('created table');
}).catch(function(e) {
  console.error(e);
});