import {
  GET_USER_PROFILE_STARTED,
  GET_USER_PROFILE_SUCCEEDED,
  GET_USER_PROFILE_FAILED,
  UPDATE_USER_PROFILE_STARTED,
  UPDATE_USER_PROFILE_SUCCEEDED,
  UPDATE_USER_PROFILE_FAILED,
} from "../actions/action.types";
import { client } from "../../Utilities/axiosHelper";
import { getState, setState } from "../../Utilities/authenticationChecker";
export const fetchUserProfile = (id) => (dispatch) => {
  dispatch({ type: GET_USER_PROFILE_STARTED });
  client()
    .get(`/users/${id}`)
    .then((res) => {
      console.log(res);
      const { data } = res;
      dispatch({ type: GET_USER_PROFILE_SUCCEEDED, payload: res.data });
      const previousLocalStorage = getState();
      setState({ ...previousLocalStorage, data })
      return { ...previousLocalStorage, data };

    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: GET_USER_PROFILE_FAILED });
    });
};

export const updateUserProfile = (id, data) => (dispatch) => {
  dispatch({ type: UPDATE_USER_PROFILE_STARTED });
  client()
    .put(`/users/${id}`, data)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_USER_PROFILE_SUCCEEDED, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: UPDATE_USER_PROFILE_FAILED });
    });
};
