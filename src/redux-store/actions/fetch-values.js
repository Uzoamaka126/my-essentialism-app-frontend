import { withAuth } from '../../_helpers/axiosHelper';
import * as types from './actionTypes';
import { apiURL } from '../../_helpers/urls';
import Axios from 'axios';
import { 
    GET_VALUES, 
    GET_VALUES_SUCCESS, 
    GET_VALUES_FAILURE
} from './actionTypes';

export const getValues = () => async dispatch => {
    dispatch({
        type: GET_VALUES
    });
    try {
        const response = await withAuth().get(`${apiURL}/values`);
        // .then(res => {
        dispatch({
            type: GET_VALUES_SUCCESS,
            payload: response.data
        })
        // })
    } catch(error) {
        // console.log(error);
        dispatch({
            type: GET_VALUES_FAILURE,
            // payload: error.payload
        })
    }
}