var knex = require('../knex');

knex.schema.table('services', function (table) {
  table.integer('integration_id');
  table.dropColumn('name');
  console.log('done');
}).catch(function(e) {
  console.error(e);
});