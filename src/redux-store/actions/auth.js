import * as types from "./action.types";
import { client } from "../../Utilities/axiosHelper";
import { setState } from "../../Utilities/authenticationChecker";
// const STATE = 'ESSENTIALISM'
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
      const { data, data: token } = res;
      setState({ token, data })
      return { token, data };
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
        payload: res.data.token,
        user: res.data,
      });
      const { data, data: token } = res;
      setState({  token, data })
      return { token, data };
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