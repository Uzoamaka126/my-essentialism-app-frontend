import * as types from '../actions/action.types'

const initialState = {
    values: [],
    isFetching: false,
    error: ''
};

export const valueReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.GET_VALUES_STARTED: 
            return {
                ...state,
                isFetching: true 
            }
        case types.GET_VALUES_SUCCEDED:
            return {
                ...state,
                values: action.payload,
                isFetching: false
            }
        case types.GET_VALUES_FAILED:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}