exports.up = function(knex) {
    return knex.schema.createTable('articles', tbl => {
        tbl.increments()
        tbl.integer('board_id')
            .references('id')
            .inTable('boards')
            .notNullable()
            .unsigned()
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.string('link', 255)
            .notNullable()
        tbl.string('description', 255)

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('articles')
};
