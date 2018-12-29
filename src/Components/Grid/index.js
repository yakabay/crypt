import React, { Component } from 'react'
import Row from '../Row'
import './style.css'

class Grid extends Component {
    state = {
        disabledCells: [
            {rowNumber: 1, colNumber: 1},
            {rowNumber: 2, colNumber: 1},
            {rowNumber: 3, colNumber: 4},
            {rowNumber: 4, colNumber: 3},
        ]
    }

    handleClickOnCell = disabledCell => {
        this.setState( state => ({
            disabledCells: [...state.disabledCells, disabledCell]
        }))
    }
    
    renderRows() {
        const { count } = this.props
        const { disabledCells } = this.state
        const rows = [] 
        for (let i = 1; i <= count; i++) {
            rows.push(
                <Row
                    rowNumber={i}
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
