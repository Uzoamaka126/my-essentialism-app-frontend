import React from 'react';
import { Link } from "react-router-dom";
import { StyledDefaultNavbar } from '../Styles/Navigation/StyledAuthNavbar';
import { getToken } from '../../Utilities/authenticationChecker';
import { Flex, Box } from '@chakra-ui/core';

export default function Navbar(props) {
    const token = getToken();
    
    return (
        <StyledDefaultNavbar className="navbar">
            <Box className="container">
                <Box className="nav-brand">
                    <span className="red">
                        Essentialism
                    </span>
                </Box>
                <Box className="right-nav">
                    <Link to="/">Home</Link>
                    <Link to="/about">About Us</Link>
                    {token
                        ? 
                            <Flex>
                                <Link to="/login">Login</Link>
                                <Link to="/signup">SignUp</Link>
                            </Flex>
                        :
                            <Link to="/dashbaord">Go to Dashboard</Link>}
                </Box>
            </Box>
        </StyledDefaultNavbar>
    )
}