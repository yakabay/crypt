import React from 'react'
import Cell from '../Cell'
import './style.css'

const Row = ({ rowNumber, cellsCount, onCellClick }) => {
    
    const renderCells = () => {

        const cells = [] 
        for (let i = 1; i <= cellsCount; i++) {
            cells.push(
                <Cell rowNumber={rowNumber} colNumber={i} onCellClick={onCellClick} key={i} />
            )
        }

        return cells
    }

    return (
        <div className="row">
            {renderCells()}
        </div>
    )
}
    
export default Row