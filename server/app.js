const express = require('express')
const next = require('next')
const api = require('./api')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const server = express()
const handle = app.getRequestHandler()

function applyRoutes (server) {
  server.get('/_next/*', (req, res) => {
    handle(req, res)
  })

  server.get('/static/*', (req, res) => {
    handle(req, res)
  })

  api(server)

  server.get('*', (req, res) => {
    return handle(req, res)
  })
}

if (process.env.NODE_ENV === 'test') {
  applyRoutes(server)
} else {
  app.prepare()
    .then(() => {
      applyRoutes(server)
      server.listen(3000, (err) => {
        if (err) throw err
        console.log('> Ready on http://localhost:3000')
      })
    })
    .catch(err => {
      console.error(err.stack)
      process.exit(1)
    })
}

module.exports = server
