import React from 'react'
import PropTypes from 'prop-types';

import { Button } from 'antd'

import './ChangeAvailabilityButton.styles.scss'

const ChangeAvailabilityButton = ({ handleClick }) => (
  <Button
    onClick={handleClick}
    type= "primary"
    style={{
      width: '150px',
      backgroundColor: '#7858e3',
      borderColor: '#7858e3'
    }}
  >
    Zmień dostępność
  </Button>
)

ChangeAvailabilityButton.propTypes = {
  handleClick: PropTypes.func
}



export default ChangeAvailabilityButton
