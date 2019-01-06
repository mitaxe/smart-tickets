const { API_VERSION } = require('server/constants/globals')
const uz = require('./uz')

function api (server) {
  server.use(API_VERSION, uz)
}

module.exports = api
