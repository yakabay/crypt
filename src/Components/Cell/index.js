import React, { Component } from 'react'
import './style.css'

class Cell extends Component  {

    handleClick = () => {
        const { onCellClick, rowNumber, colNumber } = this.props
        onCellClick({rowNumber, colNumber})
    }        

    render() {
        return (
            <div className="cell" onClick={this.handleClick}>
                
            </div>
        )
    }
}
    
export default Cell
