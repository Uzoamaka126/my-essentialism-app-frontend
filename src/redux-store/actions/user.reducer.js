import {
    GET_USER_PROFILE,
    GET_USER_PROFILE_SUCCESS,
    GET_USER_PROFILE_FAILURE
} from './action.types';

import { apiURL } from '../../_helpers/urls'
import { withAuth } from '../../_helpers/axiosHelper';
import axios from 'axios';

export const getUserProfile = id => async dispatch => {
    dispatch({ type: GET_USER_PROFILE });
    try {
        const response = await axios.get(`${apiURL}/users/${id}`);
        console.log(response);
        dispatch({
            type: GET_USER_PROFILE_SUCCESS,
            payload: response.data
        })
    } catch (err) {
        console.log(err);
        dispatch({ type: GET_USER_PROFILE_FAILURE });
      } 
}