exports.up = function(knex, Promise) {
    return knex.schema.createTable('board-articles', tbl => {

        tbl.integer('board_id')
            .references('board_id')
            .inTable('boards')

        tbl.integer('article_id')
            .references('article_id')
            .inTable('articles')
  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('board-articles')
}