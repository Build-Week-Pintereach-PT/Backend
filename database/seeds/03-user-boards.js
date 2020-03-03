
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('user-boards').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('user-boards').insert([
        {user_id: 1, board_id: 1},
        {user_id: 1, board_id: 2},
        {user_id: 2, board_id: 3},
        {user_id: 2, board_id: 4}
      ]);
    });
};
