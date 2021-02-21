import * as types from "./types/auth.types";
import Axios from "axios";

export const register = (user) => async (dispatch) => {
  dispatch({ type: types.REGISTER_STARTED });
  try {
    const response = await Axios.post(
      "https://essentialism-user-app.herokuapp.com/api/auth/register",
      user
    );
    if (response.data.isSuccessful === true) {
      dispatch({ type: types.REGISTER_SUCCEDED, payload: response.data.data });
      return true;
    } else if (typeof response === "undefined") {
      dispatch({ type: types.REGISTER_FAILED });
      return false;
    } else if (
      response.data.isSuccessful === false &&
      response.data.message !== "User already exists"
    ) {
      dispatch({ type: types.REGISTER_FAILED });
      return false;
    } else if (
      response.data.isSuccessful === false &&
      response.data.message === "User already exists"
    ) {
      dispatch({ type: types.REGISTER_FAILED });
      return "You have an account with this email";
    } else {
      dispatch({ type: types.REGISTER_FAILED });
      return false;
    }
  } catch (err) {
    console.log(err);
    dispatch({ type: types.REGISTER_FAILED, payload: err });
    return false;
  }
};

export const login = (user) => async (dispatch) => {
  dispatch({ type: types.LOGIN_STARTED });
  try {
    const response = await Axios.post(
      "https://essentialism-user-app.herokuapp.com/api/auth/login",
      user
    );
    if (response.data.isSuccessful === true) {
      dispatch({ type: types.LOGIN_SUCCEDED, payload: response.data.data });
      return true;
    } else if (typeof response === "undefined") {
      dispatch({ type: types.LOGIN_FAILED });
      return false;
    } else if (
      response.data.isSuccessful === false &&
      response.data.message !== "User does not exist"
    ) {
      dispatch({ type: types.LOGIN_FAILED });
      return false;
    } else if (
      response.data.isSuccessful === false &&
      response.data.message === "User does not exist"
    ) {
      dispatch({ type: types.LOGIN_FAILED });
      return "You have no account with this email";
    } else {
      dispatch({ type: types.LOGIN_FAILED });
      return false;
    }
  } catch (err) {
    dispatch({ type: types.LOGIN_FAILED, payload: err });
    return false;
  }
};

export const logout = () => (dispatch) => {
  dispatch({
    type: types.LOGOUT,
  });
};
