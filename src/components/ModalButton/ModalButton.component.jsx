import React from 'react'

import './ModalButton.styles.scss'

const ModalButton = ({ children, warning, handleClick }) => (
  <button onClick={handleClick} className={`modal-button ${warning ? 'warning' : ''}`}>
    {children}
  </button>
)

export default ModalButton
