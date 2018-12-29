import React, { Component } from 'react'
import Row from '../Row'
import './style.css'

class Grid extends Component {

    handleClickOnCell = id => console.log(id)
    
    renderRows() {
        const { count } = this.props;
        const rows = [] 
        for (let i = 1; i <= count; i++) {
            rows.push(
                <Row rowNumber={i} cellsCount={count} onCellClick={this.handleClickOnCell} key={i} />
            )
        }

        return rows
    }

    render() {
        return (
            <div className="grid__wrapper">
                {this.renderRows()}
            </div>
        )
    }
}
    
export default Grid
