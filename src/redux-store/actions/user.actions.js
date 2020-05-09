import { apiURL } from '../../Utilities/urls'
import { withAuth } from '../../Utilities/axiosHelper';
import axios from 'axios';
import * as types from './action.types'

export const getUserProfile = id => async dispatch => {
    dispatch({ type: types.USER_PROFILE_LOADING });
    try {
        const response = await axios.get(`${apiURL}/users/${id}`);
        console.log(response);
        dispatch({
            type: types.USER_PROFILE_SUCCEEDED,
            payload: response.data
        })
    } catch (err) {
        console.log(err);
        dispatch({ type: types.USER_PROFILE_FAILED });
      } 
}