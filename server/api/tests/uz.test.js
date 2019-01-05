const request = require('supertest')
const expect = require('expect')
const { API_VERSION } = require('server/constants/globals')
const app = require('server/app')

describe('GET /stations', () => {
  it('should get station by request param', (done) => {
    const city = 'kiev'
    request(app)
      .get(`${API_VERSION}/stations/${city}`)
      .expect(200)
      .expect(res => {
        expect(res.body.length).toBeGreaterThan(0)
      })
      .end(done)
  })
})
