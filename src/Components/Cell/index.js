import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { eventSystem } from '../../EventSystem';
import './style.css'

class Cell extends Component  {
    state = {
        selected: false,
        disabled: false,
    }

    tryDisableCell = (disabledCells) => {
        const { rowNumber, colNumber } = this.props
        const disabledCell = disabledCells.find(
            cell => cell.rowNumber === rowNumber && cell.colNumber === colNumber
        ) 

        if (disabledCell) {
            this.setState({disabled: true})
        }
        return null  
    }

    componentDidMount = () => {
        eventSystem.subscribe('disableCells', this.tryDisableCell);
    }
    
    componentWillUnmount = () => {
        eventSystem.unsubscribe('disableCells', this.tryDisableCell);
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

    handleClick = () => {
        if (this.state.selected || this.state.disabled) {
            return
        }
        this.setState({ selected: true })

        const { rowNumber, colNumber } = this.props
        const disabledCells = this.calculateDisabledCells({rowNumber, colNumber})
        eventSystem.publish('disableCells', disabledCells)
    }        

    render() {
        console.log(this.props.rowNumber, this.props.colNumber)

        const { selected, disabled } = this.state
        return (
            <div className={`cell ${selected ? 'cell--selected' : ''} ${disabled ? 'cell--disabled' : ''}`} onClick={this.handleClick} />
        )
    }
}

Cell.propTypes = {
    rowNumber: PropTypes.number,
    colNumber: PropTypes.number,
    disabledCells: PropTypes.array,
    onCellClick: PropTypes.func,
};
    
export default Cell
