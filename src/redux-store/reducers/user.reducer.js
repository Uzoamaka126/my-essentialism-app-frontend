import {
    USER_PROFILE_LOADING,
    USER_PROFILE_SUCCEEDED,
    USER_PROFILE_FAILED
} from '../actions/action.typess';

export const initialState = {
    loading: false,
    profile: {},
    error: false
}

export const userProfile = (state = initialState, action) => {
    switch(action.type) {
        case USER_PROFILE_LOADING: 
            return {
                ...state,
                loading: true
            }
        case USER_PROFILE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                profile: action.payload
            }
        case USER_PROFILE_FAILED:
            return {
                ...state,
                error: false,
            }
        default:
            return state;
    }
}