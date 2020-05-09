import React from 'react';
import { Link } from "react-router-dom";
import { StyledNav } from '../Styles/Navigation/topnav.styles';
import { clearLocalStorage } from'../../Utilities/authenticationChecker'

export default function AuthNavbar(props) {
    function logout() {
        clearLocalStorage();
    };

    return (
        <StyledNav className="navbar navbar-expand-lg">
            <a className="navbar-brand" href="#">Essentialism</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="nav justify-content-end">
                    <li className="nav-item active">
                        <a className="nav-link" href="#" onClick={logout}>Logout<span className="sr-only">(current)</span></a>
                    </li>
                </ul>
            </div>
            </StyledNav>
    )
}