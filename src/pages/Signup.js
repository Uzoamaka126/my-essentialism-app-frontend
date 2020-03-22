import React, { useRef, useState } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import Button from '../components/_buttons_/Button';
import Navbar from '../components/_navigation_/Navbar'
import Modal from '../components/RealModal';
import RegistrationSuccess from './RegistrationSuccess'
// Import other helper functions
import { register } from '../redux-store/actions/auth';
import Wait from '../assets/Call waiting.svg';
import Logo from '../assets/Logo.svg';
import { StyledAuthForm, StyledAuthFormWrapper } from '../components/Styles/Auth/StyledAuthForm'


// backgroundColor: '#6C63FF',
export function Signup({ history, location, success, register, loading }) {

    const fullname = useRef("");
    const email = useRef("");
    const password = useRef("");
    const [fullNameError, setFullNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");

    function handleSubmit() {
        let valid = validate();
        if(valid) {
            return;
        };

        const userSignupData = {
            fullname: fullname.current.value,
            email: email.current.value,
            password: password.current.value
        };
      
        if (userSignupData.fullname && userSignupData.email && userSignupData.password) {
            register(userSignupData);
        }        
    }

    const validate = () => {
        let isError = false;
        // var emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (fullname.current.value === "") {
            setFullNameError("Username cannot be empty!");
            isError = true;
        }
      
        if (password.current.value.length < 5) {
        setPasswordError("Minimum of 5 characters!");
        isError = true;
        }
      
        if (email.current.value.length < 10) {
        setEmailError('Please Enter a valid email address!')
        isError = true;
        }
        return isError;
    };

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
                                ref={fullname} 
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label> 
                            <input 
                                id="email"
                                onChange={() => { setEmailError("") }}
                                ref={email}
                                type="email"                         
                                required 
                            />
                        </div>
                        <div className="form-group">
                            <label>Password</label> 
                            <input 
                                id="password" 
                                type="password" 
                                ref={password} 
                                required 
                            />
                        </div>
                        <div className="form-others">
                            <Button 
                                className="button"
                                label={!loading ? "Sign Up" : "Processing..."}
                                handleClick={handleSubmit}    
                            />                        
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