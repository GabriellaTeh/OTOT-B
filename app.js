const startServer = require('./server').startServer
const createServer = require('./server').createServer

const app = createServer()
startServer(app)
