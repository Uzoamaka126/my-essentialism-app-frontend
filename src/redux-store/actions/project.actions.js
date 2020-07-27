import * as types from "../actions/action.types";
import { client } from "../../Utilities/axiosHelper";
 
export const fetchUserProjects = () => async (dispatch) => {
    dispatch({ type: types.GET_USER_PROJECTS });
    try {
        const response = await client().get(`/projects`);
        dispatch({ type: types.GET_USER_PROJECTS_SUCCESS, payload: response.data.data.projects });
    } catch (err) {
        console.log(err);
        dispatch({ type: types.GET_USER_PROJECTS_FAILURE, payload: err.response });
    }
};

export const addUserProject = (project) => async (dispatch) => {
    dispatch({ type: types.ADD_USER_PROJECTS_STARTED });
    try {
        const response = await client().post(`/projects/create`, project);
        dispatch({ type: types.ADD_USER_PROJECTS_SUCCESS, payload: response.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: types.ADD_USER_PROJECTS_FAILURE, payload: err.response });
    }
};

export const deleteUserProject = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_PROJECT_STARTED });
    try {
        const response = await client().delete(`/projects/delete/${id}`);
        dispatch({ type: types.DELETE_PROJECT_SUCCEEDED, payload: response.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: types.DELETE_PROJECT_SUCCEEDED, payload: err.response });
    }
};

export const updateUserProject = (project) => async (dispatch) => {
    dispatch({ type: types.UPDATE_PROJECT_STARTED });
    try {
        const response = await client().delete(`/projects/update`, project);
        dispatch({ type: types.UPDATE_PROJECT_SUCCEEDED, payload: response.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: types.UPDATE_PROJECT_FAILED, payload: err.response });
    }
};