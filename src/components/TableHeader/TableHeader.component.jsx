import React from 'react'

import { HEADERS } from './../../utils/constans'

import './TableHeader.styles.scss'

const TableHeader = () => (
  <thead>
    <tr>
      {HEADERS.map((header, idx) => <th key={idx}>{header}</th>)}
    </tr>
  </thead>
)

export default TableHeader
