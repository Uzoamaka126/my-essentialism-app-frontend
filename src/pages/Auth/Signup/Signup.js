import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
// import RegistrationSuccess from './RegistrationSuccess'
// Import other helper functions
import { register } from '../../../redux-store/actions/auth';
import Wait from '../../../Components/assets/Call waiting.svg';
import Logo from '../../../Components/assets/Logo.svg';
import { StyledAuthForm, StyledAuthFormWrapper } from '../../../Components/Styles/Auth/StyledAuthForm'
import { Button } from '@chakra-ui/core';

// backgroundColor: '#6C63FF',
export function Signup({ history, location, success, register, loading }) {

    const [fullNameError, setFullNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    // function handleSubmit() {
    //     let valid = validate();
    //     if(valid) {
    //         return;
    //     };

    // const validate = () => {
    //     let isError = false;
    //     // var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    //     if (fullname.current.value === "") {
    //         setFullNameError("Username cannot be empty!");
    //         isError = true;
    //     }
      
    //     if (password.current.value.length < 5) {
    //     setPasswordError("Minimum of 5 characters!");
    //     isError = true;
    //     }
      
    //     if (email.current.value.length < 10) {
    //     setEmailError('Please Enter a valid email address!')
    //     isError = true;
    //     }
    //     return isError;
    // };

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
                            <label>Fullname</label> 
                            <input 
                                id="fullname" 
                                type="text" 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label> 
                            <input 
                                id="email"
                                onChange={() => { setEmailError("") }}
                                type="email"                         
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label> 
                            <input 
                                id="password" 
                                type="password" 
                                required 
                            />
                        </div>
                        <div className="form-others">
                            {/* <Button>{!loading ? "Sign Up" : "Processing..."}</Button> */}
                            <p className="text-14">Already have an account?  
                                <Link to="/login"> Login here</Link>
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

// export default connect(state => state, actionCreators)(Signup);
const mapStateToProps = store => {
    return {
        loading: store.auth.isLoading,
        success: store.auth.register_success,
        failure: store.auth.register_error
    }
};

export default connect(mapStateToProps, { register })(Signup);