var knex = require('../knex');

knex.schema.table('patterns', function (table) {
  table.string('pattern');
  console.log('added column(s)');
}).catch(function(e) {
  console.error(e);
});