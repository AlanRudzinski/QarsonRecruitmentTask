import React from 'react';

import PropTypes from 'prop-types';

import './TableHeader.styles.scss';

const TableHeader = ({ headers }) => (
    <thead>
        <tr>
            {headers.map(header => <th>{header}</th>)}
        </tr>
    </thead>
)

TableHeader.propTypes ={
    headers: PropTypes.array
}

export default TableHeader;