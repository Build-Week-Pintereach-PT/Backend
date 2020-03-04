const db = require('../database/dbConfig')

module.exports = {
    addBoard,
    findBy,
    findById,
    update
}

async function addBoard(user) {
    const [id] = await db('boards').insert(user)
    return findById(id)
}

function findBy(filter) {
    return db('boards').where(filter)
}

function findById(id) {
    return db('boards').where({ id }).first()
}

function update(id, changes) {
    return db('users')
        .where({id})
        .update(changes)
        .then(count => (count > 0 ? this.get(id) : null))
}

function remove(id) {
    return db("projects")
        .where({id})
        .del();
}