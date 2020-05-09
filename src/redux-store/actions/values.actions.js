import { withAuth } from '../../Utilities/axiosHelper';
import * as types from './action.types';
import { apiURL } from '../../Utilities/urls';
export const getValues = () => async dispatch => {
    dispatch({
        type: types.GET_VALUES_STARTED
    });
    try {
        const response = await withAuth().get(`${apiURL}/values`);
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