
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('boards').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {id: 1, user_id: 1, name: 'Dig Sites'},
        {id: 2, user_id: 1, name: 'Myths & Legends'},
        {id: 3, user_id: 2, name: 'Krav Maga'},
        {id: 4, user_id: 2, name: 'Parkour'}
      ]);
    });
};
