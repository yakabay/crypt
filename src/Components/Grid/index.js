import React from 'react'
import Row from '../Row'
import './style.css'

const Grid = ({ rowsCount }) => {
    const renderRows = () => {
        const rows = [] 
        for (let i = 1; i <= rowsCount; i++) {
            rows.push(
                <Row id ={i} key={i} />
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