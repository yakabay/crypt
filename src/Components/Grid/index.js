import React from 'react'
import Row from '../Row'
import './style.css'

const Grid = ({ rowsColsCount, onColCLick }) => {
    const renderRows = () => {
        const rows = [] 
        for (let i = 1; i <= rowsColsCount; i++) {
            rows.push(
                <Row colsCount={rowsColsCount} onColCLick={onColCLick} id={i} key={i} />
            )
        }

        return rows
    }

    return (
        <div className="grid__wrapper">
            {renderRows()}
        </div>
    )
}
    
export default Grid