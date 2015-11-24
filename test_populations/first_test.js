var knex = require('../knex');

knex('sessions').insert({
  user_id: 2,
  token: 'myToken'
}).catch(function(e) {
  console.error(e);
});
