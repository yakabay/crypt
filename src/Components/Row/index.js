import React from 'react'
import Cell from '../Cell'
import './style.css'

const Row = ({ rowNumber, count }) => {
    
    const renderCells = () => {
        const cells = [] 
        for (let i = 1; i <= count; i++) {
            cells.push(
                <Cell
                    rowNumber={rowNumber}
                    colNumber={i}
                    count={count}
                    key={i}
                />
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
