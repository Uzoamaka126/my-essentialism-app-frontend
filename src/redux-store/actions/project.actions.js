import * as types from "./types/projects.types";
import { client } from "../../Utilities/axiosHelper";

export const fetchUserProjects = (payload) => async (dispatch) => {
  dispatch({ type: types.GET_USER_PROJECTS });
  try {
    const response = await client("projects/fetchProjects", {
      data: { userId: payload.userId },
      method: "POST",
    });
    debugger;
    if (response.isSuccessful === true) {
      dispatch({
        type: types.GET_USER_PROJECTS_SUCCESS,
        payload: response.data.projects,
      });
      return true;
    } else if (response.isSuccessful === false) {
      dispatch({
        type: types.GET_USER_PROJECTS_FAILURE,
      });
    } else {
      dispatch({
        type: types.GET_USER_PROJECTS_FAILURE,
      });
    }
  } catch (err) {
    dispatch({ type: types.GET_USER_PROJECTS_FAILURE, payload: "Error" });
    return false;
  }
};

export const fetchSingleProject = (id) => async (dispatch) => {
  dispatch({ type: types.GET_SINGLE_PROJECT_STARTED });
  try {
    const response = await client().get(`/projects/${id}`);
    dispatch({
      type: types.GET_SINGLE_PROJECT_SUCCEEDED,
      payload: response.data.data.project,
    });
    return true;
  } catch (err) {
    dispatch({ type: types.GET_SINGLE_PROJECT_FAILED, payload: err.response });
    return false;
  }
};
export const addUserProject = (project) => async (dispatch) => {
  dispatch({ type: types.ADD_USER_PROJECTS_STARTED });
  try {
    const response = await client().post(`/projects/create`, project);
    dispatch({
      type: types.ADD_USER_PROJECTS_SUCCESS,
      payload: response.data.data.response,
    });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.ADD_USER_PROJECTS_FAILURE, payload: err.response });
  }
};

export const deleteUserProject = (id) => async (dispatch) => {
  dispatch({ type: types.DELETE_PROJECT_STARTED });
  try {
    await client().delete(`/projects/delete/${id}`);

    dispatch({ type: types.DELETE_PROJECT_SUCCEEDED, payload: { id: id } });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.DELETE_PROJECT_SUCCEEDED, payload: err.response });
  }
};

export const updateUserProject = (project, id) => async (dispatch) => {
  dispatch({ type: types.UPDATE_PROJECT_STARTED });
  try {
    const response = await client().put(`/projects/update/${id}`, project);
    dispatch({ type: types.UPDATE_PROJECT_SUCCEEDED, payload: response.data });
  } catch (err) {
    console.log(err);
    dispatch({ type: types.UPDATE_PROJECT_FAILED, payload: err.response });
  }
};
