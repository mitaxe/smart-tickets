const uzApi = require('./uz')
const { API_VERSION } = require('../constants/globals')

function api (server) {
  server.use(API_VERSION, uzApi)
}

module.exports = api
