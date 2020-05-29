import { client } from '../../Utilities/axiosHelper';
import * as types from './action.types';
export const fetchValues = () => async dispatch => {
    dispatch({
        type: types.GET_VALUES_STARTED
    });
    try {
        const response = await client().get('values');
        dispatch({
            type: types.GET_VALUES_SUCCEDED,
            payload: response.data
        })
    } catch(error) {
        console.log(error);
        dispatch({
            type: types.GET_VALUES_FAILED,
            payload: error.payload
        })
    }
}