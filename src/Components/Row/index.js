import React from 'react'
import Col from '../Col'
import './style.css'

const Row = ({ colsCount, id, onColClick }) => {
    
    const renderCols = () => {

        const cols = [] 
        for (let i = 1; i <= colsCount; i++) {
            cols.push(
                <Col id={id*10 + i} key={i} onColClick={onColClick}/>
            )
        }

        return cols
    }

    return (
        <div className="row">
            {renderCols()}
        </div>
    )
}
    
export default Row