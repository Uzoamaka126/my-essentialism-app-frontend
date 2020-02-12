import React from 'react';
import { Link } from "react-router-dom";
import { StyledAuthNavbar } from '../_styles_/Navigation/StyledAuthNavbar';
import { clearLocalStorage } from'../../_helpers/authenticationChecker'

export default function AuthNavbar(props) {
    function logout() {
        clearLocalStorage();
    };

    return (
        <StyledAuthNavbar className="navbar">
            <div className="container">
                <div className="nav-brand">
                    <span className="red">
                        Essentialism
                    </span>
                </div>
                <div className="right-nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </StyledAuthNavbar>
    )
}