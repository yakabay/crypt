import React, { Component } from 'react'
import './style.css'

class Cell extends Component  {

    state = {
        selected: false,
        disabled: false,
    }

    handleClick = () => {
        const { onCellClick, rowNumber, colNumber } = this.props
        onCellClick({rowNumber, colNumber})
        this.setState({ selected: true })
    }        

    render() {
        const { selected, disabled } = this.state
        return (
            <div className={`cell ${selected ? 'cell--selected' : ''} ${disabled ? 'cell--disabled' : ''}`} onClick={this.handleClick} />
        )
    }
}
    
export default Cell
