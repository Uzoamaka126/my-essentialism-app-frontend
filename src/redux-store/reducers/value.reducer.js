import * as types from '../actions/action.types'

const initialState = {
    projects: [],
    isLoading: false,
    error: ''
};

export const valueReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_VALUES_STARTED: 
            return {
                ...state,
                isLoading: true 
            }
        case types.GET_VALUES_SUCCEDED:
            return {
                ...state,
                values: action.payload,
                isLoading: false
            }
        case types.GET_VALUES_FAILED:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default: 
            return state;
    }
}