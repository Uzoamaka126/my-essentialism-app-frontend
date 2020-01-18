import React, { useRef, useEffect, useState } from 'react';
import { Link, Route} from "react-router-dom";
import { connect } from 'react-redux'
// Import Material UI components
import formImg from '../assets/form-img.svg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import IconButton from '@material-ui/core/IconButton';

// Import other helper functions
import { register } from '../redux-store/actions/auth';

const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
      backgroundColor: '#6C63FF',
      color: '#fff'
    },
    extendedIcon: {
      marginRight: theme.spacing(1),
    },
  }));

export function Signup({ register, isLoading, success, failure, location }) {
    const [formState, setFormState] = useState({
        fullname: "",
        email: "",
        password: "",
    });  

    const classes = useStyles();

    function inputChange(event) {
        setFormState({...formState, [event.target.name]: event.target.value });
    }
    
    function submit(e) {
        e.preventDefault();
        const { fullname, email, password } = formState;

        if(fullname !== "" && email !== "" && password !== "") {
            const newUser = { 
                fullname: fullname,
                email: email,
                password: password 
            };
           
            register(newUser);
        }
    }

    return (
        <div>
            <nav className="auth-nav">
                <div className="left-nav">
                    <span className="red c-white">
                        Essentialism
                    </span>
                </div>
            </nav>
            <div className="form-wrapper">
                <form>
                   {inputError ? <div>{inputError.message}</div> : null}
                    <h1>Sign up here to get started!</h1>
                    <div className="form-group">
                        <label>Username {inputChange}</label> 
                        {/* <input name="username" type="text" ref={usernameRef} /> */}
                        <input name="fullname" type="text" onChange={inputChange} />

                    </div>
                    <div className="form-group">
                        <label>Email Address{inputChange}</label> 
                        {/* <input name="email" type="email" ref={emailRef} /> */}
                        <input name="email" type="email" onChange={inputChange} />

                    </div>
                    <div className="form-group">
                        <label>Password{inputChange}</label> 
                        {/* <input name="password" type="password" ref={passwordRef} /> */}
                        <input name="password" type="password" onChange={inputChange} />
                    </div>
                    <div className="form-group">
                        <Button onClick={submit} variant="contained" size="large" className={classes.margin}>
                            Sign Up
                        </Button>
                    </div>
                    <p>Have an account? 
                        <Link to="/login">Login here</Link>
                    </p>
                </form>
                <div className="form-img">
                    <img className="bg-img" src={formImg} />
                </div>
            </div>
        </div>
    )
}

// export default connect(state => state, actionCreators)(Signup);
const mapStateToProps = store => {
    return {
        isLoading: store.auth.isLoading,
        success: store.auth.register_success,
        failure: store.auth.register_error
    }
};

export default connect(mapStateToProps, { register })(Signup);