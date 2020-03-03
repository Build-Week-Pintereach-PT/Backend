exports.up = function(knex) {
    return knex.schema.createTable('boards', tbl => {
        tbl.increments('board_id')
        tbl.string('name', 128)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('boards')
};
