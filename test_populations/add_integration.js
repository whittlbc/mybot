var knex = require('../knex');

knex('integrations').insert({
  name: 'Uber'
}).catch(function(e) {
  console.error(e);
});
