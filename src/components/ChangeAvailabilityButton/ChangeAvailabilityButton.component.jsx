import React from 'react'
import PropTypes from 'prop-types'

import './ChangeAvailabilityButton.styles.scss'

const ChangeAvailabilityButton = ({ handleClick, available }) => (
  <button onClick={handleClick}>
    <i className={`fas fa-toggle-on toggle ${available ? 'show-icon' : ''}`} />
    <i className={`fas fa-toggle-off toggle ${available ? '' : 'show-icon'}`} />
  </button>
)

ChangeAvailabilityButton.propTypes = {
  handleClick: PropTypes.func,
  available: PropTypes.bool
}

export default ChangeAvailabilityButton
