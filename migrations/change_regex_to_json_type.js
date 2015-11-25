var knex = require('../knex');

knex.schema.table('patterns', function (table) {
  table.dropColumn('regex');
}).catch(function(e) {
  console.error(e);
});

knex.schema.table('patterns', function (table) {
  table.json('regex');
}).catch(function(e) {
  console.error(e);
});