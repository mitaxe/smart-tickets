import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { debounce as _debounce } from 'lodash'
import { Autocomplete } from 'components/forms'
import { api } from 'server/services/apiService'

export default class StationAutocomplete extends PureComponent {
  static propTypes = {
    id: PropTypes.string,
    title: PropTypes.string,
    onSelect: PropTypes.func.isRequired
  }

  constructor () {
    super()
    this.getStations = _debounce(this.getStations, 250)
  }

  state = {
    value: '',
    stations: []
  }

  onSelect = (value, item) => {
    this.props.onSelect(item)
    this.setState({ stations: [ item ], value })
  }

  getStations = async city => {
    let stations = []

    try {
      const data = await api.get(`stations/${encodeURIComponent(city)}`)
      stations = data.map(item => ({ id: item.value, title: item.title }))
    } catch (e) {
      console.info(e)
    }
    this.setState({ stations })
  }

  onChange = async value => {
    this.setState({ value })
    if (value.length === 0) {
      this.props.onSelect(value)
      return
    }

    this.getStations(value)
  }

  render () {
    const { stations, value } = this.state
    const { id, title } = this.props
    return (
      <Autocomplete
        id={id}
        title={title}
        value={value}
        data={stations}
        getItemValue={item => item.title}
        onSelect={this.onSelect}
        onChange={this.onChange}
      />
    )
  }
}
