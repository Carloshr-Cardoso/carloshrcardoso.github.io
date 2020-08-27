import React from 'react';
import logo from '../../assets/logo.svg';

const Header = () =>{
    return (
    <div className="header">
        <div className="container">
            <div className="logo-content">
                <img src={logo} className="logo" alt="logo" />
                <span className="logo-text">Carlos hr. Cardoso</span>
            </div>
            <div className="menu">
                <div className="menu-item"><a href="#">About</a></div>
                <div className="menu-item"><a href="#">Resume</a></div>
                <div className="menu-item"><a href="#">Projects</a></div>
            </div>
        </div>
    </div>
    );
}

export default Header;