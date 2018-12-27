import React from 'react'
import './style.css'

const Cell = ({ rowNumber, colNumber, onCellClick }) => {

    const handleClick = () => onCellClick({rowNumber, colNumber})

    return (
        <div className="cell" onClick={handleClick}>
            
        </div>
    )
}
    
export default Cell