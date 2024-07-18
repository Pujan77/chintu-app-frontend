import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar: React.FC = () => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Bowel Records</Link>
            </div>
            <div className="navbar-menu">
                <Link to="/">Home</Link>
                <Link to="/add">Add Record</Link>
            </div>
        </nav>
    );
};

export default Navbar;
