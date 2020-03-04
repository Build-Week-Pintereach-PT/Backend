exports.up = function(knex) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments()
        tbl.string('username', 255)
            .notNullable()
        tbl.string('password', 255)
            .notNullable()
        tbl.string('email', 255)
            .notNullable()
            .unique()
        tbl.string('name', 128)
            .notNullable()
        tbl.string('field_of_study', 128)
        tbl.string('occupation', 128)

  })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('users')
};
