const request  = require("express")
const supertest = require("supertest")
const { create } = require("../models/contacts")
const contacts = require("../routes/contacts")
const createServer = require('../server').createServer
const startServer = require('../server').startServer
const app = createServer()
const server = startServer(app)
let id

jest.setTimeout(100000)

describe('get contacts', () => {
    it('should return 200', async () => {
        await supertest(app).get('/api/contacts').expect(200)
    })
})

describe('post contacts', () => {
    it('should return 201', async () => {
        const example = await supertest(app).post('/api/contacts').send({
            name: "Alice",
            email: "alice@gmail.com",
        }).expect(201)
        id = example.body._id
    })
})

describe('post invalid contacts', () => {
    it('should return 400', async () => {
        await supertest(app).post('/api/contacts').send({
            name: "Alice",
        }).expect(400)
    })
})

describe('put contacts', () => {
    it('should return 200', async () => {
        await supertest(app).put(`/api/contacts/${id}`).send({
            name: "Jane",
            email: "jane@gmail.com",
        }).expect(200)
    })
})

describe('put contacts invalid', () => {
    it('should return 400', async () => {
        await supertest(app).put(`/api/contacts/${id}`).send({
            name: "Jane",
        }).expect(400)
    })
})

describe('put contacts invalid', () => {
    it('should return 200', async () => {
        const example = "636a240188a56f522f6c82d4"
        await supertest(app).put(`/api/contacts/${example}`).send({
            name: "Jane",
            email: "jane@gmail.com",
        }).expect(404)
    })
})

describe('delete contact invalid', () => {
    it('should return 404', async () => {
        const example = "636a240188a56f522f6c82d4"
        await supertest(app).delete(`/api/contacts/${example}`).expect(404)
    })
})

describe('delete contact', () => {
    it('should return 200', async () => {
        await supertest(app).delete(`/api/contacts/${id}`).expect(200)
    })
})