import React from 'react'
import { connect } from 'react-redux'

class Index extends React.Component {
  render () {
    return (
      <p>Hello world</p>
    )
  }
}

export default connect()(Index)