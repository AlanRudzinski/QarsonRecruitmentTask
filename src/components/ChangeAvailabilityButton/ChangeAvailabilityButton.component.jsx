import React from 'react'

import { Button } from 'antd'

import './ChangeAvailabilityButton.styles.scss'

const ChangeAvailabilityButton = ({ handleClick }) => (
  <Button
    type='primary'
    onClick={handleClick}
    style={{
      width: '150px',
      backgroundColor: '#7858e3',
      borderColor: '#7858e3'
    }}
  >
    Zmień dostępność
  </Button>
)

export default ChangeAvailabilityButton
