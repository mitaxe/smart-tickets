const router = require('express').Router()
const { UZ_HOST } = require('../constants/globals')
const fetch = require('isomorphic-unfetch')

router.get('/stations/:city', async (req, res) => {
  const { city } = req.params
  try {
    const response = await fetch(`${UZ_HOST}/train_search/station/?term=${encodeURIComponent(city)}`)
    const stations = await response.json()
    res.send(stations)
  } catch (e) {
    res.status(500).send([])
  }
})

module.exports = router
