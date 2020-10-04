import { client } from '../../Utilities/axiosHelper';
import * as types from './action.types';
export const fetchValues = () => async dispatch => {
    dispatch({
        type: types.GET_VALUES_STARTED
    });
    try {
        const response = await client().get('/values');
        dispatch({
            type: types.GET_VALUES_SUCCEDED,
            payload: response.data
        })
    } catch(error) {
        dispatch({
            type: types.GET_VALUES_FAILED,
            payload: error
        })
    }
}

export const fetchTopValues = (id) => async dispatch => {
    dispatch({
        type: types.GET_TOP_VALUES_STARTED
    });
    try {
        const response = await client().get(`/values/fetch/${id}`);
        dispatch({
            type: types.GET_TOP_VALUES_SUCCEEDED,
            payload: response.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: types.GET_TOP_VALUES_FAILED,
            payload: error
        })
    }
}