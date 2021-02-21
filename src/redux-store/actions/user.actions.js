import * as types from "./types/user.types";
import { client } from "../../Utilities/axiosHelper";

export const fetchUserProfile = (id) => async (dispatch) => {
  dispatch({ type: types.GET_USER_PROFILE_STARTED });
  try {
    const response = await client().get(`/users/${id}`);
    dispatch({ type: types.GET_USER_PROFILE_SUCCEEDED, payload: response.data.data });
  } catch (err) {
    dispatch({ type: types.GET_USER_PROFILE_FAILED, payload: err });
  }
};
export const updateUserProfile = (data) => async (dispatch) => {
  dispatch({ type: types.UPDATE_USER_PROFILE_STARTED });
  try {
    const response = await client().patch(`/users/edit`, data);
    dispatch({ type: types.UPDATE_USER_PROFILE_SUCCEEDED, payload: response.data });
  } catch (err) {
    dispatch({ type: types.UPDATE_USER_PROFILE_FAILED, payload: err });
  }
};

export const fetchTopValues = (id) => async (dispatch) => {
  dispatch({
    type: types.GET_TOP_VALUES_STARTED,
  });
  try {
    const response = await client().get(`/values/fetch/${id}`);
    dispatch({
      type: types.GET_TOP_VALUES_SUCCEEDED,
      payload: response.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.GET_TOP_VALUES_FAILED,
      payload: error,
    });
  }
};

export const createTopValues = (value) => async (dispatch) => {
  dispatch({
    type: types.ADD_TOP_VALUES_STARTED,
  });
  try {
    const response = await client().post("/values/create", value);
    dispatch({ type: types.ADD_TOP_VALUES_SUCCEEDED, payload: response });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.ADD_TOP_VALUES_FAILED,
      payload: error,
    });
  }
};
