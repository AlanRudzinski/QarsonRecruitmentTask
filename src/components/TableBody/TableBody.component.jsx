import React from 'react';

import PropTypes from 'prop-types';

import './TableBody.styles.scss';

const TableBody = ({ data }) => (
    <tbody>
        {console.log(data)}
        {data.map(({ engine, model, make, availability }, idx) => (
            <tr key={idx}>
                {}
                <td>{`${make} ${model} ${engine}`}</td>
                <td>{model}</td>
                <td>{engine}</td>
                <td>{availability ? 'Tak' : 'Nie'}</td>
                <td>[buttons]</td>
            </tr>
        ))}
    </tbody>
)

TableBody.propTypes ={
    data: PropTypes.array
}

export default TableBody;