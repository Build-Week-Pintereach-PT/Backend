exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', tbl => {
        tbl.increments('id')
            .notNullable()
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

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('users')
};