import axios from 'axios';
import * as types from './actionTypes';

export const getValues = () => dispatch => {
    axios.get("https://my-essentialism-app.herokuapp.com/api/values")
      .then(res => {
        console.log((res.data));
        dispatch({
          type: types.GET_VALUES_SUCCESS,
          payload: res.data.values
        });
      })
      .catch(err =>
        dispatch({
          type: types.GET_VALUES_FAILURE,
          payload: err.message
        })
      );
  };