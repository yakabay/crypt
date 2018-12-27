import React from 'react'
import Row from '../Row'
import './style.css'

const Grid = ({ count, onCellClick }) => {
    const renderRows = () => {
        const rows = [] 
        for (let i = 1; i <= count; i++) {
            rows.push(
                <Row rowNumber={i} cellsCount={count} onCellClick={onCellClick} key={i} />
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