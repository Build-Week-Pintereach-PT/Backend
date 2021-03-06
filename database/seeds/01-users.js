const bcrypt = require('bcryptjs')

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {id: 1, username: 'IndiWhip', password: bcrypt.hashSync('password1', 8), email: 'dr.jones@marshall.edu', name: 'Indiana Jones', field_of_study: 'archaeology', occupation: 'professor'},
        {id: 2, username: 'sheiksneak', password: bcrypt.hashSync('password1', 8), email: 'princesszelda@hyrule.gov', name: 'Princess Zelda', field_of_study: 'espionage', occupation: 'Ruler of Hyrule'}
      ]);
    });
};
