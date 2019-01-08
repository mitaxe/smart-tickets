const router = require('express').Router()
const { uzApi } = require('server/services/apiService')

router.get('/stations/:city', async (req, res) => {
  const { city } = req.params
  try {
    const stations = await uzApi.get(`train_search/station/?term=${encodeURIComponent(city)}`)
    res.send(stations)
  } catch (e) {
    res.sendStatus(500)
  }
})

module.exports = router
