var knex = require('../knex');

knex('patterns').insert({
  user_id: 1,
  service_id: 1,
  match_message: 'I heard a match!',
  regex: {
    pattern: 'hey',
    modifiers: 'gi'
  }
}).catch(function(e) {
  console.error(e);
});