import * as types from "./action.types";
import Axios from "axios";

export const register = (user) => (dispatch) => {
  dispatch({
    type: types.REGISTER_STARTED,
  });
  Axios.post(
    "https://essentialism-user-app.herokuapp.com/api/auth/register", user)
    .then((response) => {
      dispatch({
        type: types.REGISTER_SUCCEDED,
        payload: response.data,
      });
    })
    .catch(err => {
      console.log(err);
        dispatch({
          type: types.REGISTER_FAILED,
          payload: err,
        });
    });
};

export const login = (user) => (dispatch) => {
  dispatch({
    type: types.LOGIN_STARTED,
  });
  Axios.post("https://essentialism-user-app.herokuapp.com/api/auth/login", user)
    .then((response) => {
      dispatch({
        type: types.LOGIN_SUCCEDED,
        action: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.LOGIN_FAILED,
        payload: err,
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: types.LOGOUT,
  });
};
