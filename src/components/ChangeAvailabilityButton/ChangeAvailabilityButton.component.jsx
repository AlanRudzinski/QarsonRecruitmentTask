import React from 'react'

import { Button } from 'antd'

import './ChangeAvailabilityButton.styles.scss'

const ChangeAvailabilityButton = ({ handleClick }) => (
  <Button
    onClick={handleClick}
  >
    Zmień dostępność
  </Button>
)

export default ChangeAvailabilityButton
