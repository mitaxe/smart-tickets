const { API_VERSION } = require('server/constants/globals')
const uzApi = require('./uz')

function api (server) {
  server.use(API_VERSION, uzApi)
}

module.exports = api
