import * as types from '../actions/action.types';
import { setState, clearAppState } from '../../Utilities/authenticationChecker';

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
            }
        case types.LOGIN_SUCCEDED:
            const { user: newUser, payload: newInfo } = action;
            setState({ newUser, newInfo })
            return {
                ...state,
                isLoading: false,
                login_success: true,
                user: action.user,
                token: action.payload,
                isAuthUser: true
            }
        case types.LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                login_error: true,
                isAuthUser: false
            }
        case types.REGISTER_STARTED: 
            return {
                ...state,
                isLoading: true
            }
        case types.REGISTER_SUCCEDED: 
            const { user: oldUser, payload: oldUserInfo } = action;
            setState({ oldUser, oldUserInfo })
            return {
                ...state,
                isLoading: false,
                register_success: true,
                user: action.user,
                token: action.payload,
                isAuthUser: true
            }
        case types.REGISTER_FAILED:
            return {
                ...state,
                isLoading: false,
                register_error: true,
                isAuthUser: false,
                error_message: action.payload
            }
        case types.LOGOUT:
            clearAppState();
            return {
                ...state,
                user: {},
                token: null
            }
        default:
            return state;
    }
}