exports.up = function(knex, Promise) {
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

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('articles')
};
