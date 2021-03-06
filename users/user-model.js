const db = require('../database/dbConfig');

module.exports = {
    addUser,
    find,
    findBy,
    findById
}

function addUser(user) {
    return db('users')
        .insert(user, 'id')
        .then(([id]) => id)
}

function find() {
    return db('users as u')
        .select('u.email', 'u.field_of_study', 'u.id', 'u.name', 'u.occupation', 'u.username')
}

function findBy(username) {
    return db('users')
        .where({username})
        .then(([user]) => user)
}

function findById(id) {
    return db('users').where({ id }).first()
}
