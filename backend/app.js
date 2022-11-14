const express = require('express')
const app = express()
const cors = require('cors')
const middleware = require('./utils/middleware')

const router = require('./controllers/pathfinding')

// app.use(express.static('build'))
app.use(cors())
app.use(express.json())

// app.use(middleware.requestLogger)

app.use('/api', router)

// app.use(middleware.unknownEndpoint)
// app.use(middleware.errorHandler)

module.exports = app