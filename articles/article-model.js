const db = require('../database/dbConfig')

module.exports = {
    addArticle,
    findBy,
    findById,
    update,
}

async function addArticle(user) {
    const [id] = await db('articles').insert(user)
    return findById(id)
}

function findBy(filter) {
    return db('articles').where(filter)
}

function findById(id) {
    return db('articles').where({ id }).first()
}

function update(id, changes) {
    return db('users')
        .where({id})
        .update(changes)
        .then(count => (count > 0 ? this.get(id) : null))
}