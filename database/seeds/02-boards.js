
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('boards').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('boards').insert([
        {board_id: 1, name: 'Dig Sites'},
        {board_id: 2, name: 'Myths & Legends'},
        {board_id: 3, name: 'Krav Maga'},
        {board_id: 4, name: 'Parkour'}
      ]);
    });
};
