import {
  GET_USER_PROFILE_STARTED,
  GET_USER_PROFILE_SUCCEEDED,
  GET_USER_PROFILE_FAILED,
  UPDATE_USER_PROFILE_STARTED,
  UPDATE_USER_PROFILE_SUCCEEDED,
  UPDATE_USER_PROFILE_FAILED,
} from "../actions/action.types";
import { client } from "../../Utilities/axiosHelper";
export const fetchUserProfile = (id) => async (dispatch) => {
  dispatch({ type: GET_USER_PROFILE_STARTED });
  try {
    const response = await client().get(`/users/fetch/${id}`);
    console.log(response.data);
    dispatch({ type: GET_USER_PROFILE_SUCCEEDED, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: GET_USER_PROFILE_FAILED });
  }
};

export const updateUserProfile = (id, data) => (dispatch) => {
  dispatch({ type: UPDATE_USER_PROFILE_STARTED });
  client()
    .patch(`/users/edit/${id}`, data)
    .then((res) => {
      console.log(res);
      dispatch({ type: UPDATE_USER_PROFILE_SUCCEEDED, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
      dispatch({ type: UPDATE_USER_PROFILE_FAILED });
    });
};