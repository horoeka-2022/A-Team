const path = require('path')
const express = require('express')

const server = express()

// MIDDLEWARE
server.use(express.json())
server.use(express.static(path.join(__dirname, './public')))
// server.use('/api/v1/fru', fruitsRouter)

module.exports = server
