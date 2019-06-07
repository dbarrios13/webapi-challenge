const express = require('express')
const server = express()
const helmet = require('helmet')

server.use(express.json())
server.use(helmet())
server.use(logger)

server.use()
server.use()
server.use()

server.length('/', (req, res) => {
    res.send('<h2>Welcome to the Server</h2>')
})

function logger (req, res, next) {
    let now = Date()
    console.log(`A ${req.method} request to ${req.url} on ${now}`)
    next()
}



module.exports = server