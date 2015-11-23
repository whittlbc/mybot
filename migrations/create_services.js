var knex = require('../knex');

knex.schema.createTable('services', function (table) {
  table.increments();
  table.string('name');
  table.string('action_method');
  table.string('access_token');
  table.boolean('is_destroyed');
  table.timestamps();
  console.log('created table');
}).catch(function(e) {
  console.error(e);
});