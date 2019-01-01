import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const CountSelect = ({ count, increaseCount, decreaseCount }) => (
    <div className="count-select">
        <div
            className="count-select__decrease-button"
            onClick={decreaseCount}
        >
        </div>
        <div className="count-select__value">{`${count}x${count}`}</div>
        <div 
            className="count-select__increase-button"
            onClick={increaseCount}
        >
        </div>
    </div>
)

CountSelect.propTypes = {
    count: PropTypes.number,
    increaseCount: PropTypes.func,
    decreaseCount: PropTypes.func,
}

export default CountSelect;
    