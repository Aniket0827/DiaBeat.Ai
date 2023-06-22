import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <h1 className="logo">DiaBeat.Ai</h1>
            <div className="nav-links">
                <Link to="/">Home</Link>
                <Link to="/Profile">Profile</Link>
                <Link to="/Form">Form</Link>
               
                <Link to="/ChatBot">Chatbot</Link>  {/* Added this line */}
            </div>
        </nav>
    );
}

export default Navbar;