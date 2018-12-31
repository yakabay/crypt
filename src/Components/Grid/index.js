import React, { Component } from 'react'
import Row from '../Row'
import './style.css'

class Grid extends Component {
    state = {
        disabledCells: []
    }

    handleClickOnCell = clickedCell => {
        const newDisabledCells = this.calculateDisabledCells(clickedCell)
        this.setState( state => ({
            disabledCells: [...state.disabledCells, ...newDisabledCells]
        }))
    }

    calculateDisabledCells = clickedCell => {
        const n = this.props.count
        const rN = clickedCell.rowNumber // rN stans for "row in North position" 
        const cN = clickedCell.colNumber // cN stans for "col in North position" 
        const rE = cN // rE stans for "row in East position" 
        const cE = (n + 1) - rN // cE stans for "col in East position"
        const rS = (n + 1) - rN // rS stans for "row in South position" 
        const cS = (n + 1) - cN // cE stans for "col in South position"
        const rW = (n + 1) - cN // rW stans for "row in West position" 
        const cW = rN // cW stans for "col in West position"

        return [
            {rowNumber: rE, colNumber: cE},
            {rowNumber: rS, colNumber: cS},
            {rowNumber: rW, colNumber: cW},
        ]
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
