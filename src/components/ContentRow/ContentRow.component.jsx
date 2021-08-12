import React, { useState } from 'react'
import ChangeAvailabilityButton from '../ChangeAvailabilityButton/ChangeAvailabilityButton.component'
import RemoveButton from '../RemoveButton/RemoveButton.component'

import { Image } from 'antd'




import './ContentRow.styles.scss'

const ContentRow = ({ rowData }) => {
  const { make, model, engine, availability, photo } = rowData
  const [available, setAvailable] = useState(availability)

  const changeAvailability = () => (
    setAvailable(!available)
  )

  return (
    <tr className={available ? '' : 'highlightRed'}>
      <td>
        <span>{`${make} ${model} ${engine}`}</span>
        {photo ? <Image width={150} src={photo}/> : ''}
      </td>
      <td>{model}</td>
      <td>{engine}</td>
      <td>{available ? 'Tak' : 'Nie'}</td>
      <td><RemoveButton /><ChangeAvailabilityButton handleClick={changeAvailability} /></td>
    </tr>
  )
}

export default ContentRow
