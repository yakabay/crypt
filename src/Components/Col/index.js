import React from 'react'
import './style.css'

const Col = ({ id, onClick }) => {

    return (
        <div className="col" onClick={onClick(id)}>
            
        </div>
    )
}
    
export default Col