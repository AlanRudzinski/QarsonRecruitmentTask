import React, { useEffect, useState } from 'react';

import TableHeader from '../TableHeader/TableHeader.component';
import TableBody  from '../TableBody/TableBody.component';

import { getAllTableCars } from '../../utils/fetchCarData';

import './CarTable.styles.scss';

const CarTable = () => {

    const [tableData, setTableData] = useState([])
    const headers = ['Nazwa', 'Model', 'Silnik', 'Dostepnosc', 'Akcja']    

    useEffect(() => {
        getAllTableCars()
        .then(data => setTableData(data))
        .catch(error => console.error(error));
    }, [])

    return (
    <table>
    <TableHeader headers={headers}/>
    <TableBody data={tableData} />
    </table>
)}

export default CarTable;