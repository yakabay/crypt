import React from 'react'
import './style.css'

const Row = ({ rowsCount }) => {
    return (
        <div className="row">
            {rowsCount}
        </div>
    )
}
    
export default Row