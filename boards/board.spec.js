const server = require('../api/server')
const db = require('../database/dbConfig')
const request = require('supertest')

beforeEach(() => {
    return db.migrate.rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run())
})

describe('add new board', () => {
    it('POST to /api/boards/', async () => {

        const register = await request(server)
        .post('/api/user/register')
        .send({username: 'test', password: 'taco', email: 'taco@test.com', name: 'Taco Tom'})

        const login = await request(server)
        .post('/api/user/login')
        .send({username: 'test', password: 'taco'})

        const res = await request(server)
        .post('/api/boards/')
        .send({user_id: 3, name: 'testboard'})
        .set('authorization', login.body.message.token)

        expect(res.status).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body).toBe(5)
    })
})

describe('get all boards', () => {
    it('GET to /api/boards/', async () => {

        const res = await request(server)
        .get('/api/boards/')

        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body[0]).toHaveProperty('user_id')
        expect(res.body[0]).toHaveProperty('name')
    })
})

describe('get boards by user', () => {
    it('GET to /api/boards/user/:id', async () => {

        const register = await request(server)
        .post('/api/user/register')
        .send({username: 'test', password: 'taco', email: 'taco@test.com', name: 'Taco Tom'})

        const login = await request(server)
        .post('/api/user/login')
        .send({username: 'test', password: 'taco'})

        const res = await request(server)
        .get('/api/boards/')

        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body[0]).toHaveProperty('user_id')
        expect(res.body[0]).toHaveProperty('name')
    })
})

describe('edit board', () => {
    it('PUT to /api/boards/:id', async () => {

        const register = await request(server)
        .post('/api/user/register')
        .send({username: 'test', password: 'taco', email: 'taco@test.com', name: 'Taco Tom'})

        const login = await request(server)
        .post('/api/user/login')
        .send({username: 'test', password: 'taco'})

        const add = await request(server)
        .post('/api/boards/')
        .send({user_id: 3, name: 'testboard'})
        .set('authorization', login.body.message.token)

        const res = await request(server)
        .put('/api/boards/5')
        .send({user_id: 3, name: 'testboard2'})
        .set('authorization', login.body.message.token)

        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('message')
        expect(res.body).toMatchObject({message: 'Board updated successfully'})
    })
})

describe('delete board', () => {
    it('DELETE to /api/boards/:id', async () => {

        const register = await request(server)
        .post('/api/user/register')
        .send({username: 'test', password: 'taco', email: 'taco@test.com', name: 'Taco Tom'})

        const login = await request(server)
        .post('/api/user/login')
        .send({username: 'test', password: 'taco'})

        const add = await request(server)
        .post('/api/boards/')
        .send({user_id: 3, name: 'testboard'})
        .set('authorization', login.body.message.token)

        const res = await request(server)
        .delete('/api/boards/5')
        .set('authorization', login.body.message.token)

        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('message')
        expect(res.body).toMatchObject({message: 'Board deleted successfully'})
    })
})