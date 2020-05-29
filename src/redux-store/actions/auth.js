import * as types from "./action.types";
import { client } from "../../Utilities/axiosHelper";
export const register = (user) => (dispatch) => {
  dispatch({
    type: types.REGISTER_STARTED,
  });
  client()
    .post("auth/register", user)
    .then((response) => {
      dispatch({
        type: types.REGISTER_SUCCEDED,
        user: response.data,
      });
    })
    .catch((err) => {
      console.log(err);
      if (err === "This email already exists") {
        dispatch({
          type: types.REGISTER_FAILED,
          payload: err
        });
      }
    });
};

export const login = (user) => (dispatch) => {
  dispatch({
    type: types.LOGIN_STARTED,
  });
  client()
    .post("auth/login", user)
    .then((res) => {
      if (res.data === "" || res.data === null) {
        dispatch({
          type: types.LOGIN_FAILED,
          payload: "You have no account with this email"
        });
      }
      else {
        dispatch({
          type: types.LOGIN_SUCCEDED,
          payload: res.data.token,
          user: res.data,
        });
      }
    })
    .catch((err) => {
      console.log(err);
      dispatch({
        type: types.LOGIN_FAILED,
        payload: err
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: types.LOGOUT,
  });
};
