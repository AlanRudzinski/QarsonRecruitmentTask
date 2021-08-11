import React, { useState } from 'react'

import ChangeAvailabilityButton from '../ChangeAvailabilityButton/ChangeAvailabilityButton.component'

import RemoveButton from '../RemoveButton/RemoveButton.component'

const ContentRow = ({ rowData, idx }) => {
  const { make, model, engine, availability } = rowData
  const [available, setAvailable] = useState(availability)

  const changeAvailability = () => (
    setAvailable(!available)
  )

  return (
    <tr key={idx} className={available ? '' : 'highlightRed'}>
      <td>
        {`${make} ${model} ${engine}`}
        {/* <img src={photo}/> */}
      </td>
      <td>{model}</td>
      <td>{engine}</td>
      <td>{available ? 'Tak' : 'Nie'}</td>
      <td><RemoveButton /><ChangeAvailabilityButton handleClick={changeAvailability} /></td>
    </tr>
  )
}

export default ContentRow
