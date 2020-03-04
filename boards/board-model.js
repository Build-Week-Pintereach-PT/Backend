const db = require('../database/dbConfig')

module.exports = {
    addBoard,
    find,
    findBoardByUser,
    update,
    remove
}

function addBoard(board) {
    return db('boards')
        .insert(board, 'id')
        .then(([id]) => id)
}

function find() {
    return db('boards')
}

function findBoardByUser(user_id) {
    return db('boards')
        .where({user_id})
}

function update(id, changes) {
    return db('boards')
        .where({id})
        .update(changes)
}

function remove(id) {
    return db("boards")
        .where({id})
        .del();
}