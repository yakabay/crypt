import React, { Component } from 'react'
import PropTypes from 'prop-types';
import EventSystem from '../../EventSystem';
import './style.css'

class Cell extends Component  {
    state = {
        selected: false,
        disabled: false,
    }

    componentDidMount = () => {
        EventSystem.subscribe('cellClicked', this.updateRiskCount);
    }
    
    componentWillUnmount = () => {
        EventSystem.unsubscribe('cellClicked', this.updateRiskCount);
    }
    
    static getDerivedStateFromProps(props) {
        const { disabledCells, rowNumber, colNumber } = props
        const disabledCell = disabledCells.find(
            cell => cell.rowNumber === rowNumber && cell.colNumber === colNumber
        ) 

        if (disabledCell) {
            return {disabled: true}
        }
        return null        
    }

    tryDisableCell() {
        const { disabledCells, rowNumber, colNumber } = this.props
        const disabledCell = disabledCells.find(
            cell => cell.rowNumber === rowNumber && cell.colNumber === colNumber
        ) 

        if (disabledCell) {
            return {disabled: true}
        }
        return null  
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
