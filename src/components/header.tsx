import React from 'react';
import { Link } from 'react-router-dom'; 
import '../main.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <Link to="/">MyApp</Link> {/* Logo linking to the home page */}
            </div>
            <nav className="navigation">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
