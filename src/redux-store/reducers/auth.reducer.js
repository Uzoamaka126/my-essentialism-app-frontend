import * as types from '../actions/action.types';
import { setState } from '../../Utilities/localStorage';

const initialState = {
    user: {},
    token: null,
    isLoading: false,
    register_error: false,
    register_success: false,
    login_error: false,
    login_success: false,
    isAuthUser: false,
    error_message: ""
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN_STARTED:
            return {
                ...state,
                isLoading: true,
                login_success: false,
                login_error: false,
                isAuth: false
            }
        case types.LOGIN_SUCCEDED:
            setState(action.payload)
            console.log(action.payload)
            return {
                ...state,
                isLoading: false,
                login_success: true,
                login_error: false,
                user: action.payload,
                token: action.payload.token,
                isAuthUser: true
            }
        case types.LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                error_message: action.payload,
                login_success: false,
                login_error: true,
                isAuthUser: false,
            }
        case types.REGISTER_STARTED: 
            return {
                ...state,
                isLoading: true
            }
        case types.REGISTER_SUCCEDED: 
            setState(action.payload)
            return {
                ...state,
                isLoading: false,
                register_success: true,
                register_error: false,
                user: action.payload.response,
                token: action.payload.token,
                isAuthUser: true,
            }
        case types.REGISTER_FAILED:
            return {
                ...state,
                isLoading: false,
                register_error: true,
                register_success: false,
                isAuthUser: false,
                error_message: action.payload
            }
        case types.LOGOUT:
            return {
                ...state,
                user: {},
                token: null
            }
        default:
            return state;
    }
}