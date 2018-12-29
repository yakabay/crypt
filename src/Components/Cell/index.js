import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './style.css'

class Cell extends Component  {
    state = {
        selected: false,
        disabled: false,
    }

    componentDidMount() {
        const { disabledCells, rowNumber, colNumber } = this.props
        const disabledCell = disabledCells.find(
            cell => cell.rowNumber === rowNumber && cell.colNumber === colNumber
        ) 
        disabledCell && this.setState({disabled: true})
    }

    handleClick = () => {
        if (this.state.selected || this.state.disabled) {
            return
        }
        const { onCellClick, rowNumber, colNumber } = this.props
        this.setState({ selected: true })
        onCellClick({rowNumber, colNumber})
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
