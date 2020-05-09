import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

import formImg from '../.././../Components/assets/form-img.svg';
import Wait from '../.././../Components/assets/Call waiting.svg';
import Logo from '../.././../Components/assets/Logo.svg';

import { login } from '../../../redux-store/actions/auth';
import { StyledAuthForm, StyledAuthFormWrapper } from '../../../Components/Styles/Auth/StyledAuthForm'
import { Button } from '@chakra-ui/core';

export function Login(props) {
    const email = useRef();
    const password = useRef();
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const submitLogin = () => {
        let validateData = validate();
        if (validateData) {
            return;
        }

        const userLoginData = {
            email: email.current.value,
            password: password.current.value,
        };

        if (userLoginData.email && userLoginData.password) {
            props.login(userLoginData);
        };
    }

    const validate = () => {
        let isError = false;
        var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if(password.current.value.length < 5) {
            setPasswordError("Password has to be a minimum of 5 characters");
            isError = true;
        }

        if(!(emailRegex.test(email.current.value))) {
            setEmailError("Please enter your email address");
            isError = true;
        }

        return isError;
    };

    if (props.loading) {
        // <Spinner />
    }
    if(props.login_success) {
        // const targetRoute = localStorage.getItem('target-route');
        // console.log(targetRoute);
        // const goToLocation = targetRoute !== 'undefined' ? targetRoute : '/dashboard';
        props.history.push('/dashboard');
    }

    return (
            <StyledAuthFormWrapper className="form-wrapper">
                <StyledAuthForm>
                  <div className="left-side-form">
                        <div className="first-row">
                            <div className="logo">
                                <img src={Logo} />
                            </div>
                            <div className="m-auto form-title form-others">
                                <h3 className="text-14">Login Form</h3>
                            </div>
                        </div>
                        <div className="tiny-line"></div>
                        <div className="second-row">
                            <div className="form-group">
                                <label htmlFor="email">Email</label> 
                                <input 
                                    id="email"
                                    onChange={() => { setEmailError("") }}
                                    ref={email} 
                                    type="email"
                                    placeholder="Enter your email" 
                                />
                                <div className="error-message">
                                    <p>{emailError}</p>
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="password">Password</label> 
                                <input 
                                    id="password"
                                    onChange={() => { setPasswordError("") }}
                                    ref={password}
                                    type="password" 
                                    placeholder="Enter your password"                       
                                />
                                <div className="error-message">
                                    <p>{passwordError}</p>
                                </div>
                            </div>
                            <div className="form-others">
                            {/* <Button>
                                {props.loading ? "Processing..." : "Log In"}
                            </Button> */}
                                <p className="text-14">Don't have an account?  
                                    <Link to="/signup"> Signup here</Link>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="right-side-form">
                        <div className="form-img">
                            <img className="bg-img" src={Wait} />
                        </div>
                    </div>
                </StyledAuthForm>               
            </StyledAuthFormWrapper>
    )
}

const mapStateToProps = store => {
    console.log(store)
    return {
        loading: store.auth.loading,
        login_success: store.auth.login_success
    }
}

export default connect(mapStateToProps, { login })(
    Login
);
