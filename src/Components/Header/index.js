import './style.css';
import React from 'react';
import CountSelect from '../CountSelect'
import PropTypes from 'prop-types';
import logo from '../../logo.svg';

const Header = ({ count,  increaseCount, decreaseCount }) => {
    return (
        <header className="header">
            <img src={logo} className="header__logo" alt="logo" />
            <CountSelect
                count={count}
                increaseCount={increaseCount}
                decreaseCount={decreaseCount}
            />
        </header>
    )
}

Header.propTypes = {
    count: PropTypes.number,
    increaseCount: PropTypes.func,
    decreaseCount: PropTypes.func,
}

export default Header;
    