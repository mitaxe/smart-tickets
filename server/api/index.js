const uz = require('./uz')
const { API_VERSION } = require('server/constants/globals')

function api (server) {
  server.use(API_VERSION, uz)
}

module.exports = api
