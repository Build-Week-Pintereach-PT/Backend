const server = require('../api/server')
const db = require('../database/dbConfig')
const request = require('supertest')

beforeEach(() => {
    return db.migrate.rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run())
})

describe('add new article', () => {
    it('POST to /api/articles', async () => {

        const register = await request(server)
        .post('/api/user/register')
        .send({username: 'test', password: 'taco', email: 'taco@test.com', name: 'Taco Tom'})

        const login = await request(server)
        .post('/api/user/login')
        .send({username: 'test', password: 'taco'})

        const newBoard = await request(server)
        .post('/api/boards/')
        .send({user_id: 3, name: 'testboard'})
        .set('authorization', login.body.message.token)

        const res = await request(server)
        .post('/api/articles/')
        .send({board_id: 5, link: 'www.besttacos.com', description: 'Where to find the best tacos'})
        .set('authorization', login.body.message.token)

        expect(res.status).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body).toBe(9)
    })
})

describe('get all articles', () => {
    it('GET to /api/articles/', async () => {

        const res = await request(server)
        .get('/api/articles/')

        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body[0]).toHaveProperty('board_id')
        expect(res.body[0]).toHaveProperty('link')
        expect(res.body[0]).toHaveProperty('description')
    })
})

describe('get articles by board', () => {
    it('GET to /api/articles/board/:id', async () => {

        const register = await request(server)
        .post('/api/user/register')
        .send({username: 'test', password: 'taco', email: 'taco@test.com', name: 'Taco Tom'})

        const login = await request(server)
        .post('/api/user/login')
        .send({username: 'test', password: 'taco'})

        const newBoard = await request(server)
        .post('/api/boards/')
        .send({user_id: 3, name: 'testboard'})
        .set('authorization', login.body.message.token)

        const newArticle = await request(server)
        .post('/api/articles/')
        .send({board_id: 5, link: 'www.besttacos.com', description: 'Where to find the best tacos'})
        .set('authorization', login.body.message.token)

        const res = await request(server)
        .get('/api/articles/board/5')

        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body[0]).toHaveProperty('board_id')
        expect(res.body[0]).toHaveProperty('link')
        expect(res.body[0]).toHaveProperty('description')
    })
})

describe('edit article', () => {
    it('PUT to /api/articles/:id', async () => {

        const register = await request(server)
        .post('/api/user/register')
        .send({username: 'test', password: 'taco', email: 'taco@test.com', name: 'Taco Tom'})

        const login = await request(server)
        .post('/api/user/login')
        .send({username: 'test', password: 'taco'})

        const newBoard = await request(server)
        .post('/api/boards/')
        .send({user_id: 3, name: 'testboard'})
        .set('authorization', login.body.message.token)

        const newArticle = await request(server)
        .post('/api/articles/')
        .send({board_id: 5, link: 'www.besttacos.com', description: 'Where to find the best tacos'})
        .set('authorization', login.body.message.token)

        const res = await request(server)
        .put('/api/articles/9')
        .send({board_id: 5, link: 'www.besttacos.org', description: 'Web tracker to find the best tacos'})
        .set('authorization', login.body.message.token)

        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('message')
        expect(res.body).toMatchObject({message: 'Article updated successfully'})
    })
})

describe('delete article', () => {
    it('DELETE to /api/articles/:id', async () => {

        const register = await request(server)
        .post('/api/user/register')
        .send({username: 'test', password: 'taco', email: 'taco@test.com', name: 'Taco Tom'})

        const login = await request(server)
        .post('/api/user/login')
        .send({username: 'test', password: 'taco'})

        const newBoard = await request(server)
        .post('/api/boards/')
        .send({user_id: 3, name: 'testboard'})
        .set('authorization', login.body.message.token)

        const newArticle = await request(server)
        .post('/api/articles/')
        .send({board_id: 5, link: 'www.besttacos.com', description: 'Where to find the best tacos'})
        .set('authorization', login.body.message.token)

        const res = await request(server)
        .delete('/api/articles/9')
        .set('authorization', login.body.message.token)

        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('message')
        expect(res.body).toMatchObject({message: 'Article deleted successfully'})
    })
})