import React, { useState } from 'react'

import { Modal, Button } from 'antd'

import './RemoveButton.styles.scss'

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
      <Button type='danger' style={{ width: '150px' }} onClick={showModal}>Usuń</Button>
      <Modal
        title='Usuń wiersz'
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        okType='danger'
        okText='Tak'
        cancelText='Nie'
      >
        <p>Czy na pewno chcesz usunąć wiersz?</p>
      </Modal>
    </>
  )
}
export default RemoveButton
