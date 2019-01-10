import React from 'react'
import { connect } from 'react-redux'
import StationAutocomplete from 'components/StationAutocomplete'

import 'styles/main.scss'
import styles from './styles.scss'

class Index extends React.Component {
  state = {
    departureStation: '',
    arrivalStation: ''
  }

  handleStationSelect = (station, value) => this.setState({ [station]: value })

  render () {
    return (
      <div className={styles.container}>
        <div className={styles.stationForms}>
          <StationAutocomplete
            id='departure'
            title='Откуда:'
            onSelect={station => this.handleStationSelect('departureStation', station)} />
          <StationAutocomplete
            id='arrival'
            title='Куда:'
            onSelect={station => this.handleStationSelect('arrivalStation', station)} />
        </div>
      </div>
    )
  }
}

export default connect()(Index)
