var knex = require('../knex');

knex.schema.table('users', function (table) {
  table.boolean('is_destroyed');
}).catch(function(e) {
  console.error(e);
});