const express = require('express')
const server = express()
const helmet = require('helmet')
const actions = require('../data/helpers/actionRouter')
const projects = require('../data/helpers/projectRouter')

server.use(express.json())
server.use(helmet())
server.use(logger)

server.use('/actions', actions)
server.use('/projects', projects)

server.get('/', (req, res) => {
    res.send('<h2>Welcome to the Server</h2>')
})

function logger (req, res, next) {
    let now = Date()
    console.log(`A ${req.method} request to ${req.url} on ${now}`)
    next()
}

module.exports = server