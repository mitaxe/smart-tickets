import React from 'react'
import { connect } from 'react-redux'
const fetch = require('isomorphic-unfetch')

class Index extends React.Component {
  static async getInitialProps ({ req }) {
    const baseUrl = req ? `${req.protocol}://${req.get('Host')}` : ''
    const city = 'киев'
    const stations = await fetch(`${baseUrl}/api/v1/stations/${encodeURIComponent(city)}`)
    const json = await stations.json()
    return { stations: json }
  }

  render () {
    return (
      <p>Hello world</p>
    )
  }
}

export default connect()(Index)
