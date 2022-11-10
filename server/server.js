const path = require('path')
const express = require('express')

const usersRouter = require('./routes/users')

const server = express()

// MIDDLEWARE
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))

server.use('/api/v1/users', usersRouter)

module.exports = server
