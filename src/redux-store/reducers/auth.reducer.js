import * as types from '../actions/action.types';

const initialState = {
    user: null,
    token: null,
    isLoading: false,
    register_error: false,
    register_success: false,
    login_error: false,
    login_success: false
};

export const authReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.LOGIN_STARTED:
            return {
                ...state,
                isLoading: true,
            }
        case types.LOGIN_SUCCEDED:
            return {
                ...state,
                isLoading: false,
                login_success: true,
                user: action.user,
                token: action.token
            }
        case types.LOGIN_FAILED:
            return {
                ...state,
                isLoading: false,
                login_error: true,
            }
        case types.REGISTER_STARTED: 
            return {
                ...state,
                isLoading: true
            }
        case types.REGISTER_SUCCEDED: 
            return {
                ...state,
                isLoading: false,
                register_success: true,
                user: action.user.response,
                token: action.user.token,
            }
        case types.REGISTER_FAILED:
            return {
                ...state,
                isLoading: false,
                register_success: false,
                register_error: true
            }
        case types.LOGOUT:
            return {
                ...state,
                user: null,
                token: null
            }
        default:
            return state;
    }
}