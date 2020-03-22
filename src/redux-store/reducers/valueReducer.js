import { 
    GET_VALUES, 
    GET_VALUES_SUCCESS, 
    GET_VALUES_FAILURE
} from '../actions/actionTypes';

const initialState = {
    values: [],
    isFetching: false,
    error: ''
};

export const valueReducer = (state = initialState, action) => {
    switch(action.type) {
        case GET_VALUES: 
            return {
                ...state,
                isFetching: true 
            }
        case GET_VALUES_SUCCESS:
            return {
                ...state,
                values: action.payload,
                isFetching: false
            }
        case GET_VALUES_FAILURE:
            return {
                ...state,
                error: action.payload
            }
        default: 
            return state;
    }
}