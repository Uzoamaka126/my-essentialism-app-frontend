import axios from 'axios';
import * as types from './actionTypes';
import { apiURL } from '../../_helpers/urls';

export const register = user => dispatch => {
    dispatch({
        type: types.REGISTER_REQUEST
    });
    axios
        .post(`${apiURL}/auth/register`, user)
        .then(res => {
            dispatch({
                type: types.REGISTER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.REGISTER_FAILURE
            });
        });
};

export const Login = user => dispatch => {
    dispatch({
        type: types.LOGIN_START
    });
    axios
        .post(`${apiURL}/auth/login`, user)
        .then(res => {
            dispatch({
                type: types.LOGIN_SUCCESS,
                payload: res.data
            })
        })
        .catch(err => {
            console.log(err);
            dispatch({
                type: types.LOGIN_FAILURE
            })   
        })
}

// verify the token
export const verify = (token, id) => dispatch => {
    dispatch({
        type: types.VERIFICATION_START
    });
    return axios
    .post(`${apiURL}/auth/verify/${id}/${token}`)
    .then(res => {
        dispatch({ 
            type: types.VERIFICATION_SUCCESS, 
            payload: res.data 
        })
      })
      .catch(err => {
        console.log(err);
        dispatch({ 
            type: types.VERIFICATION_FAILURE 
        });
      });
}


