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
    const response = await client().get(`/users/${id}`);
    dispatch({ type: GET_USER_PROFILE_SUCCEEDED, payload: response.data.data });
  } catch (err) {
    dispatch({ type: GET_USER_PROFILE_FAILED, payload: err });
  }
};
export const updateUserProfile = (data) => async (dispatch) => {
  dispatch({ type: UPDATE_USER_PROFILE_STARTED });
  try {
    const response = await client().patch(`/users/edit`, data);
    dispatch({ type: UPDATE_USER_PROFILE_SUCCEEDED, payload: response.data });
  } catch (err) {
      dispatch({ type: UPDATE_USER_PROFILE_FAILED, payload: err });
  }
};