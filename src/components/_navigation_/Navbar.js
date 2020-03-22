import React from 'react';
import { Link } from "react-router-dom";
import { StyledDefaultNavbar } from '../Styles/Navigation/StyledAuthNavbar';

export default function Navbar(props) {
    // const location = props.location.pathname;
    // console.log(props);
    return (
        <StyledDefaultNavbar className="navbar">
            <div className="container">
                <div className="nav-brand">
                    <span className="red">
                        Essentialism
                    </span>
                </div>
                <div className="right-nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    <Link to="/login">Login</Link>
                    <Link to="/signup">SignUp</Link>
                </div>
            </div>
        </StyledDefaultNavbar>
    )
}