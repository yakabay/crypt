import React, { Component } from 'react';
import './style.css';
import logo from '../../logo.svg';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <img src={logo} className="header__logo" alt="logo" />
            </header>
        );
    }
}
    
export default Header;
    