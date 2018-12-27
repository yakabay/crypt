import React from 'react'
import './style.css'

const Col = ({ id, onColClick }) => {

    const handleClick = () => onColClick(id)

    return (
        <div className="col" onClick={handleClick}>
            
        </div>
    )
}
    
export default Col