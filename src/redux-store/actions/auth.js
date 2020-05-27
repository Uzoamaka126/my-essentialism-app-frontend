import * as types from "./action.types";
import { client } from "../../Utilities/axiosHelper";

export const register = (user) => (dispatch) => {
  dispatch({
    type: types.REGISTER_STARTED,
  });
    client().post('/auth/register', user)
    .then(res => {
      console.log(res.data);
      dispatch({
          type: types.REGISTER_SUCCEDED,
          payload: res.data.token,
          user: res.data
      })
  })
  .catch(err => {
      console.log(err);
      dispatch({
          type: types.REGISTER_FAILED
      });
  });
};

export const login = (user) => (dispatch) => {
  dispatch({
    type: types.LOGIN_STARTED,
  });
    client().post('/auth/login', user)
    .then((res) => {
      console.log(res.data);
      dispatch({
        type: types.LOGIN_SUCCEDED,
        token: res.data.token,
        user: res.data.user,
      });
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
  })
}