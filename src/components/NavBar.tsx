import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Logo from "./Logo";

const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsOpen(!isOpen);
    };

    useEffect(() => {
        const nav = document.querySelector(".nav-container");

        const handleScroll = () => {
            if (nav) {
                if (window.scrollY > 0) {
                    nav.classList.add('scrolled');
                } else {
                    nav.classList.remove('scrolled');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        handleScroll();

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); 

    return (
        <div className="nav-container">
            <ul className="nav nav-underline">
                <li> <Logo /> </li>
                <li className="nav-item">
                    <Link to="/" className="nav-link"> home </Link>
                </li>
                <li className="nav-item">
                    <Link to="/About" className="nav-link"> about </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Pricing" className="nav-link"> pricing </Link>
                </li>
                <li className="nav-item">
                    <Link to="/Contact" className="nav-link"> contact </Link>
                </li>
            </ul>
            <div id="mobile-navbar" className={isOpen ? 'open' : ''} onClick={toggleMobileMenu}>
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
                <ul className={`mobile-menu ${isOpen ? 'open' : ''}`}>
                    <li className="mobile-navbar-item">
                        <Link to="/" className="nav-link"> Home </Link>
                    </li>
                    <li className="mobile-navbar-item">
                        <Link to="/About" className="nav-link"> About </Link>
                    </li>
                    <li className="mobile-navbar-item">
                        <Link to="/Pricing" className="nav-link"> Pricing </Link>
                    </li>
                    <li className="mobile-navbar-item">
                        <Link to="/Contact" className="nav-link"> Contact Us </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
};


export default NavBar;
