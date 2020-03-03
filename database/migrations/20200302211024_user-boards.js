exports.up = function(knex, Promise) {
    return knex.schema.createTable('user-boards', tbl => {

        tbl.integer('user_id')
            .references('id')
            .inTable('users')

        tbl.integer('board_id')
            .references('board_id')
            .inTable('boards')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('user-boards')
};