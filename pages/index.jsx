import React from 'react'
import { connect } from 'react-redux'
import { api } from 'server/services/apiService'

class Index extends React.Component {
  async componentDidMount () {
    const city = 'киев'
    let stations = []
    try {
      await api.get(`stations/${encodeURIComponent(city)}`)
    } catch (e) {
      console.info(e)
    }

    console.log(stations)
  }

  render () {
    return (
      <p>Hello world</p>
    )
  }
}

export default connect()(Index)
