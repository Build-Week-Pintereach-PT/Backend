const server = require('../api/server')
const db = require('../database/dbConfig')
const request = require('supertest')

beforeEach(() => {
    return db.migrate.rollback()
    .then(() => db.migrate.latest())
    .then(() => db.seed.run())
})

describe('register user', () => {
    it('POST to /api/user/register', async () => {

        const res = await request(server)
        .post('/api/user/register')
        .send({username: 'test', password: 'taco', email: 'taco@test.com', name: 'Taco Tom'})
        
        expect(res.status).toBe(201)
        expect(res.type).toBe('application/json')
        expect(res.body).toBe(3)
    })
})

describe('login user', () => {
    it('POST to /api/user/login', async () => {

        const register = await request(server)
        .post('/api/user/register')
        .send({username: 'test', password: 'taco', email: 'taco@test.com', name: 'Taco Tom'})
        
        const res = await request(server)
        .post('/api/user/login')
        .send({username: 'test', password: 'taco'})

        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('message')
        expect(res.body.message).toHaveProperty('token')
    })
})

describe('get all users', () => {
    it('GET to /api/user/', async () => {
        const res = await request(server)
        .get('/api/user/')
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveLength(2)
        expect(res.body[0]).toHaveProperty('email')
        expect(res.body[0]).toHaveProperty('field_of_study')
        expect(res.body[0]).toHaveProperty('id')
        expect(res.body[0]).toHaveProperty('name')
        expect(res.body[0]).toHaveProperty('occupation')
        expect(res.body[0]).toHaveProperty('username')
        expect(res.body[0]).toMatchObject({name: 'Indiana Jones'})
    })
})

describe('get user by id', () => {
    it('GET to /api/user/:id', async () => {
        const res = await request(server)
        .get('/api/user/1')
        expect(res.status).toBe(200)
        expect(res.type).toBe('application/json')
        expect(res.body).toHaveProperty('email')
        expect(res.body).toHaveProperty('field_of_study')
        expect(res.body).toHaveProperty('id')
        expect(res.body).toHaveProperty('name')
        expect(res.body).toHaveProperty('occupation')
        expect(res.body).toHaveProperty('username')
        expect(res.body).toMatchObject({name: 'Indiana Jones'})
    })
})