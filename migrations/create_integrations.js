var knex = require('../knex');

knex.schema.createTable('integrations', function (table) {
  table.increments();
  table.string('name');
  table.string('client_id');
  table.string('client_secret');
  table.timestamps();
  console.log('created table');
}).catch(function(e) {
  console.error(e);
});