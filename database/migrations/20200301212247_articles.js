exports.up = function(knex) {
    return knex.schema.createTable('articles', tbl => {
        tbl.increments('articles_id')
        tbl.integer('board_id', 128)
            .references('board_id')
            .inTable('boards')
            .notNullable()
        tbl.string('link', 255)
            .notNullable()
        tbl.string('description', 255)

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('articles')
};
