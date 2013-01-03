var http_server = require('http-server')

var server = http_server.createServer({
  root: 'public',
  headers: { 'X-Delicious-Tacos': 'true' }
})

server.listen(8080)
