exports.up = function(knex) {
    return knex.schema.createTable('user-boards', tbl => {
        
        tbl.integer('user_id')
            .references('id')
            .inTable('users')
            .notNullable()

        tbl.integer('board_id')
            .references('board_id')
            .inTable('boards')
            .notNullable()

        tbl.primary(['user_id', 'board_id'])
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('user-boards')
};