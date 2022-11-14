const app = require('./app')
const http = require('http')
const logger = require('./utils/logger')

const PORT = 3001
const server = http.createServer(app)

server.listen(PORT, () => {
  logger.info(`Server running on port ${PORT}`)
})