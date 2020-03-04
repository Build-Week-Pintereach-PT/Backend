exports.up = function(knex) {
    return knex.schema.createTable('boards', tbl => {
        tbl.increments()
        tbl.integer('user_id')
            .references('id')
            .inTable('users')
            .notNullable()
            .unsigned()
            .onUpdate('CASCADE')
            .onDelete('CASCADE')
        tbl.string('name', 128)
  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('boards')
};
