import { withAuth } from '../../_helpers/axiosHelper';
import * as types from './actionTypes';
import { apiURL } from '../../_helpers/urls';
import Axios from 'axios';

export const getValues = () => dispatch => {
    dispatch({
        type: types.GET_USER_VALUES
    });
    withAuth()
        // Axios
        .get(`${apiURL}/values`)
        .then(res => {
            console.log(res.data);
            dispatch({
                type: types.GET_USER_VALUES_SUCCESS,
                payload: res.data
            })
        })
        .catch(error => {
            console.log(error);
            dispatch({
                type: types.GET_VALUES_FAILURE,
                payload: error.payload
            })
        })
}