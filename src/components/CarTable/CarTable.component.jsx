import React, { useEffect, useState } from 'react'

import TableHeader from '../TableHeader/TableHeader.component'
import TableBody from '../TableBody/TableBody.component'

import { getAllTableCars } from '../../utils/fetchCarData'

import './CarTable.styles.scss'

const headers = ['Nazwa', 'Model', 'Silnik', 'Dostepnosc', 'Akcja']


const CarTable = () => {
  const [tableData, setTableData] = useState([])

  useEffect(() => {
    getAllTableCars()
      .then(data => setTableData(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="round-border">
      <table>
        <colgroup>
          <col span="1" />
          <col span="1" />
          <col span="1" />
          <col span="1" />
          <col span="1" />
        </colgroup>
        <TableHeader headers={headers} />
        <TableBody data={tableData} />
      </table>
    </div>
  )
}

export default CarTable
