import React from 'react'
import { connect } from 'react-redux'
import { api } from 'server/services/apiService'

class Index extends React.Component {
  async componentDidMount () {
    const city = 'киев'
    const stations = await api.get(`stations/${encodeURIComponent(city)}`)
    console.log(stations)
  }

  render () {
    console.log(this.props)
    return (
      <p>Hello world</p>
    )
  }
}

export default connect()(Index)
