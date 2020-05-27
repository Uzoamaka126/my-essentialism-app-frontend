import {
    GET_USER_PROFILE_STARTED,
    GET_USER_PROFILE_SUCCEEDED,
    GET_USER_PROFILE_FAILED,
    UPDATE_USER_PROFILE_STARTED,
    UPDATE_USER_PROFILE_SUCCEEDED,
    UPDATE_USER_PROFILE_FAILED,
} from "../actions/action.types";

export const initialState = {
    loading: false,
    values: [],
    projects: [],
    profile: {}
};

export const userProfileReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_PROFILE_STARTED || UPDATE_USER_PROFILE_STARTED:
            return {
                ...state,
                loading: true,
            };
        case GET_USER_PROFILE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                profile: action.payload
            };
        case UPDATE_USER_PROFILE_SUCCEEDED:
            return {
                ...state,
                loading: false,
                profile: action.payload
            };
        case GET_USER_PROFILE_FAILED || UPDATE_USER_PROFILE_FAILED:
            return {
                ...state,
                loading: false,
            };
        default:
            return state;
    }
};
