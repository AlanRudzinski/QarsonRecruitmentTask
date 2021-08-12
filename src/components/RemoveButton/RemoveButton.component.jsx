import React, { useState } from 'react'

import Modal from 'react-modal';
import ModalButton from '../ModalButton/ModalButton.component';

import './RemoveButton.styles.scss'

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const RemoveButton = () => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [rowToRemove, setRowToRemove] = useState(null)

  const showModal = (e) => {
    setIsModalVisible(true)
    setRowToRemove(e.target.closest('tr'))
  }

  const handleOk = () => {
    setIsModalVisible(false)
    handleRemoveRow(rowToRemove)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const handleRemoveRow = (row) => {
    row.remove()
  }

  return (
    <>
      <button className="remove-button" onClick={showModal}><i className="far fa-trash-alt"></i></button>
        <Modal
          isOpen={isModalVisible}
          onRequestClose={handleCancel}
          contentLabel="dupa"
          style={customStyles}
          >
          <p>Czy na pewno chcesz usunąć wiersz?</p>
          <div className="button-container">
            <ModalButton warning={true} handleClick={handleOk}>Tak</ModalButton>
            <ModalButton handleClick={handleCancel} >Nie</ModalButton>
          </div>
        </Modal>      
    </>
  )
}
export default RemoveButton
