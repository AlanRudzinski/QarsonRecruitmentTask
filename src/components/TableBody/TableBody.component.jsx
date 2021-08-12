import React from 'react'

import ContentRow from '../ContentRow/ContentRow.component'

import PropTypes from 'prop-types'

import './TableBody.styles.scss'

const TableBody = ({ data }) => (
  <tbody>
    {data.map((rowData, idx) => (
      <ContentRow rowData={rowData} key={idx} />
    ))}
  </tbody>
)

TableBody.propTypes = {
  data: PropTypes.array
}

export default TableBody
