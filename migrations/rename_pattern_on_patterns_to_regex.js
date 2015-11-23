var knex = require('../knex');

knex.schema.table('patterns', function (table) {
  table.renameColumn('pattern', 'regex');
  console.log('renamed column(s)');
}).catch(function(e) {
  console.error(e);
});