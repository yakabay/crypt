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
        const rN = clickedCell.rowNumber // rN stands for "row in North position" 
        const cN = clickedCell.colNumber // cN stands for "col in North position" 
        const rE = cN // rE stands for "row in East position" 
        const cE = (n + 1) - rN // cE stands for "col in East position"
        const rS = (n + 1) - rN // rS stands for "row in South position" 
        const cS = (n + 1) - cN // cE stands for "col in South position"
        const rW = (n + 1) - cN // rW stands for "row in West position" 
        const cW = rN // cW stands for "col in West position"

        return [
            {rowNumber: rE, colNumber: cE},
            {rowNumber: rS, colNumber: cS},
            {rowNumber: rW, colNumber: cW},
        ]
    }


	calculateCellsForQueen = ({rowNumber: y, colNumber: x}) => {
        const calculatedCells = [];

		const defineCellsForDirection = (x, y, dx, dy) => {
            const newX = x + dx;
            const newY = y + dy;

            if (newX !== 0 && newX !== 9 && newY !== 0 && newY !== 9) {
                calculatedCells.push({rowNumber: newY, colNumber: newX});
                defineCellsForDirection(newX, newY, dx, dy)
            }
        };

        defineCellsForDirection(x, y, 0, 1);
        defineCellsForDirection(x, y, 1, 1);
        defineCellsForDirection(x, y, 1, 0);
        defineCellsForDirection(x, y, 1, -1);
        defineCellsForDirection(x, y, 0, -1);
        defineCellsForDirection(x, y, -1, -1);
        defineCellsForDirection(x, y, -1, 0);
        defineCellsForDirection(x, y, -1, 1);
        
        return calculatedCells;
	};

    handleClick = () => {
        if (this.state.selected || this.state.disabled) {
            return
        }
        this.setState({ selected: true })
        
        const { rowNumber, colNumber, count } = this.props

        const disabledCells = count === 8
            ? this.calculateCellsForQueen({rowNumber, colNumber})
            : this.calculateDisabledCells({rowNumber, colNumber})

        eventSystem.publish('disableCells', disabledCells)
    }        

    render() {
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
