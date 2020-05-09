import * as types from '../actions/action.types'
export const initialState = {
    loading: false,
    profile: {},
    error: false
}

export const userProfile = (state = initialState, action) => {
    switch(action.type) {
        case types.USER_PROFILE_LOADING: 
            return {
                ...state,
                loading: true
            }
        case types.USER_PROFILE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                profile: action.payload
            }
        case types.USER_PROFILE_FAILED:
            return {
                ...state,
                error: false,
            }
        default:
            return state;
    }
}