import {
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE
} from '../actions/actionTypes';

export const initialState = {
    loading: false,
    profile: {},
    values: [],
    error: false
}

export const userProfile =(state = initialState, action) => {
    switch(action.type) {
        case GET_USER_PROFILE: 
            return {
                ...state,
                loading: true
            }
        case GET_USER_PROFILE_SUCCESS:
            return {
                ...state,
                loading: false,
                profile: action.payload
            }
        case GET_USER_PROFILE_FAILURE:
            return {
                ...state,
                error: false,
            }
        default:
            return state;
    }
}