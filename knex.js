var Constants = require('./utils/constants');
var pg = require('pg');
module.exports = require('knex')({
  client: 'pg',
  connection: Constants.PG_CONNECTION
});