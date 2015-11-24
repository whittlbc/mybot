var knex = require('../knex');

knex('users').insert({
  name: 'Ben Whittle',
  email: 'benwhittle31@gmail.com',
  password: 'gotime'
}).catch(function(e) {
  console.error(e);
});

knex('patterns').insert({
  user_id: 1,
  service_id: 1,
  match_message: 'I heard a match!',
  regex: '/hey/g'
}).catch(function(e) {
  console.error(e);
});

knex('services').insert({
  name: 'Uber',
  action_method: 'getHistory'
}).catch(function(e) {
  console.error(e);
});
