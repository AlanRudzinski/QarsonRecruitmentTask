import React, { useEffect, useState } from 'react'

import TableHeader from '../TableHeader'
import TableBody from '../TableBody'

import { getAllTableCars } from '../../utils/fetchCarData'

import './CarTable.styles.scss'



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
        <TableHeader />
        <TableBody data={tableData} />
      </table>
    </div>
  )
}

export default CarTable
