import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h2 className="logo">HealthApp</h2>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Form">Form</Link>
                <Link to="/BarChart">Chart</Link>
                <Link to="/ChatBot">Chatbot</Link>  {/* Added this line */}
            </div>
        </nav>
    );
}

export default Navbar;