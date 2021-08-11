import React from 'react';

import TableHeader from '../TableHeader/TableHeader.component';
import TableBody  from '../TableBody/TableBody.component';

import './CarTable.styles.scss';

const CarTable = () => {
    const headers = ['Nazwa', 'Model', 'Silnik', 'Dostepnosc', 'Akcja']

    return (
    <table>
    <TableHeader headers={headers}/>
    <TableBody />
    </table>
)}

export default CarTable;