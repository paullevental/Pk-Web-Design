import Logo from "./Logo";
import React, { useState } from 'react';


const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-container">
            <ul className="nav nav-underline">
                <li> <Logo /> </li>
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">Home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">About</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Work</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contact Us</a>
                </li>
            </ul>
            <div id="mobile-navbar" className={isOpen ? 'open' : ''} onClick={toggleMobileMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <ul className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <li><a href="">Home</a></li>
                    <li><a href="">About</a></li>
                    <li><a href="">Work</a></li>
                    <li><a href="">Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
};



export default NavBar;
