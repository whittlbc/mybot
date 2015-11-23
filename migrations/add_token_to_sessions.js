var knex = require('../knex');

knex.schema.table('sessions', function (table) {
  table.string('token');
  console.log('added column(s)');
}).catch(function(e) {
  console.error(e);
});