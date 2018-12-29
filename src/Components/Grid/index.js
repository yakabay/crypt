import React, { Component } from 'react'
import Row from '../Row'
import './style.css'

class Grid extends Component {
    state = {
        disabledCells: [
            {row: 1, col: 1},
            {row: 2, col: 1},
            {row: 3, col: 4},
        ]
    }

    handleClickOnCell = id => console.log(id)
    
    renderRows() {
        const { count } = this.props
        const { disabledCells } = this.state
        const rows = [] 
        for (let i = 1; i <= count; i++) {
            rows.push(
                <Row
                    drowNumber={i}
                    cellsCount={count}
                    disabledCells={disabledCells}
                    onCellClick={this.handleClickOnCell}
                    key={i}
                />
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
