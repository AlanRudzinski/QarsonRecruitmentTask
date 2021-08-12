import React from 'react'

import ContentRow from '../ContentRow'

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
  data: PropTypes.arrayOf(Object).isRequired
}

export default TableBody
