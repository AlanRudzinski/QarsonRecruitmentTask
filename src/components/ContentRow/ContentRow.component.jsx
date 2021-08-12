import React, { useState } from 'react'

import PropTypes from 'prop-types'
import Modal from 'react-modal';

import ChangeAvailabilityButton from '../ChangeAvailabilityButton'
import RemoveButton from '../RemoveButton'
import ModalButton from '../ModalButton';


import './ContentRow.styles.scss'


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column'
  },
};

const ContentRow = ({ rowData }) => {
  const { make, model, engine, availability, photo } = rowData
  const [available, setAvailable] = useState(availability)
  const [isModalVisible, setModalVisible] = useState(false)

  const changeAvailability = () => (
    setAvailable(!available)
  )

  const openModal = () => {
    setModalVisible(true)
  }

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <tr className={available ? '' : 'highlightRed'}>
      <td>
        <span>{`${make} ${model} ${engine}`}</span>
        {photo ? <div onClick={openModal}  className="img-container" >
          <img className="thumbnail" src={photo} alt={`${model} car`}/>
          <i className="far fa-eye"></i>
        </div>
        : ''}

      <Modal
        style={customStyles}
        isOpen={isModalVisible}
        onRequestClose={closeModal}
      >
        <img className="modal-image" src={photo} alt={`${model} car`} />
        <ModalButton handleClick={closeModal} warning={true}>Close</ModalButton>
      </Modal>
      </td>
      <td>{model}</td>
      <td>{engine}</td>
      <td>{available ? 'Tak' : 'Nie'}</td>
      <td><RemoveButton /><ChangeAvailabilityButton available={available} handleClick={changeAvailability} /></td>
   </tr>
  )
}

ContentRow.propTypes = {
  rowData: PropTypes.shape({}).isRequired
}


export default ContentRow
