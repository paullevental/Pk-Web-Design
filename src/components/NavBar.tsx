import Logo from "./Logo";
import { useState } from 'react';
import { Link } from "react-router-dom";

//<a className="nav-link" href="#">Contact Us</a>

function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    function toggleMobileMenu() {
        setIsOpen(!isOpen);
    };

    return (
        <div className="nav-container">
            <ul className="nav nav-underline">
                <li> <Logo /> </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link"> Home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/About" className="nav-link"> About </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Pricing" className="nav-link"> Pricing </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact" className="nav-link"> Contact Us </Link>
                     
                </li>
            </ul>
            <div id="mobile-navbar" className={isOpen ? 'open' : ''} onClick={toggleMobileMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <ul className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <li className="mobile-navbar-item"><a className="nav-link" href="">Home</a></li>
                    <li className="mobile-navbar-item"><a className="nav-link" href="">About</a></li>
                    <li className="mobile-navbar-item"><a className="nav-link" href="">Work</a></li>
                    <li className="mobile-navbar-item"><a className="nav-link" href="">Contact Us</a></li>
                </ul>
            </div>
        </div>
    );
};


export default NavBar;
