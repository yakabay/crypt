import React from 'react'
import './style.css';

const Grid = ({ rows }) => {
    return (
        <div className="grid__wrapper">
            {rows}
        </div>
    );
}
    
export default Grid;