import * as types from "./action.types";
import { client } from "../../Utilities/axiosHelper";
import { setState } from "../../Utilities/authenticationChecker";
// const STATE = 'ESSENTIALISM'
export const register = (user) => (dispatch) => {
  dispatch({
    type: types.REGISTER_STARTED,
  });
  client()
    .post("auth/register", user)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: types.REGISTER_SUCCEDED,
        payload: res.data.token,
        user: res.data.data,
      });
      if (res && (res.data !== null || res.data !== "")) {
        const { data, token } = res.data;
        setState({ data, token });
        return { data, token };
      }
    })
    .catch((err) => {
      console.log(err.response, err.status);
      if (err.response.data.error === "This email already exists") {
        dispatch({
          type: types.REGISTER_FAILED,
          payload: err.response.data.error
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
        });
      }
      if (res.data !== "" || res.data !== null) {
        console.log(typeof res.data);
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
      });
    });
};

export const logout = () => (dispatch) => {
  dispatch({
    type: types.LOGOUT,
  });
};
