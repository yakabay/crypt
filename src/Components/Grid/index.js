import React from 'react'
import Row from '../Row'
import './style.css'

const Grid = ({ count }) => {

    // TODO: disable central cell if the count is odd
    // use componentDidMount()

    const renderRows = () => {
        const rows = [] 
        for (let i = 1; i <= count; i++) {
            rows.push(
                <Row
                    rowNumber={i}
                    count={count}
                    key={i}
                />
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
