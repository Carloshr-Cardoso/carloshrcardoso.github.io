import React from 'react';
import logo from '../../assets/logo.svg';

const Header = () =>{
    return (
    <div className="header">
        <div className="container">
            <div className="logo-content">
                <div className="logo-items">
                    <img src={logo} className="logo" alt="logo" />
                    <div className="logo-text">
                        <span>Carlos hr. Cardoso</span>
                        <p>Software Engineer</p>
                    </div>
                </div>
            </div>
            <div className="menu">
                <div className="menu-items">
                    <a href="#">About</a>
                    <a href="#">Resume</a>
                    <a href="#">Projects</a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Header;