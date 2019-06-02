import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import TAutocomplete from 'react-autocomplete'

import styles from './styles.scss'

const Autocomplete = ({ id, value, data, title, onSelect, onChange }) =>
  <div className={styles.container}>
    { title && <label htmlFor={id} className={styles.title}>{title}</label> }
    <div className={styles.form}>
      <TAutocomplete
        inputProps={{ id }}
        value={value}
        items={data}
        getItemValue={item => item.title}
        onSelect={onSelect}
        onChange={event => onChange(event.target.value)}
        renderMenu={children => (
          <div className={cx(styles.menu, { [styles.emptyMenu]: data.length === 0 })}>
            {children}
          </div>
        )}
        renderItem={(item, isHighlighted) => (
          <div className={cx(styles.item, { [styles.activeItem]: isHighlighted })} key={item.id}>
            {item.title}
          </div>
        )}
      />
    </div>
  </div>

Autocomplete.propTypes = {
  id: PropTypes.string,
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string
    })),
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired
}

export default Autocomplete
