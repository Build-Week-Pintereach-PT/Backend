const db = require('../database/dbConfig')

module.exports = {
    addArticle,
    find,
    findArticleByBoard,
    update,
    remove
}

function addArticle(article) {
    return db('articles')
        .insert(article, 'id')
        .then(([id]) => id)
}

function find() {
    return db('articles')
}

function findArticleByBoard(board_id) {
    return db('articles')
        .where({board_id})
}

function update(id, changes) {
    return db('articles')
        .where({id})
        .update(changes)
}

function remove(id) {
    return db("articles")
        .where({id})
        .del();
}