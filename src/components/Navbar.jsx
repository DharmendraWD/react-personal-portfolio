import React, { useState } from 'react';
import './css/Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar-container">
                {/* Logo/Brand */}
                <div className="navbar-brand">
                    <a href="/" id='logo'>Dharmendra</a>
                </div>

                {/* Hamburger Menu Icon (Mobile) */}
                <div
                    className={`hamburger ${isOpen ? 'open' : ''}`}
                    onClick={toggleMenu}
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

                {/* Navigation Links */}
                <ul className={`navbar-links ${isOpen ? 'active' : ''}`}>
                    <li><Link class="text-[pink-500]" to="/" onClick={() => setIsOpen(false)}>HOME</Link></li>
                    <li><Link class="text-[pink-500]" to="/about" onClick={() => setIsOpen(false)}>ABOUT</Link></li>
                    <li><Link class="text-[pink-500]" to="/skills" onClick={() => setIsOpen(false)}>SKILLS</Link></li>
                    <li><Link class="text-[pink-500]" to="/experiences" onClick={() => setIsOpen(false)}>EXPERIENCES</Link></li>
                    <li><Link class="text-[pink-500]" to="/projects" onClick={() => setIsOpen(false)}>PROJECTS</Link></li>
                    <li><Link class="text-[pink-500]" to="/education" onClick={() => setIsOpen(false)}>EDUCATION</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;