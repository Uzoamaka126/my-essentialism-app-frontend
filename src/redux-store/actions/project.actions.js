import {
    ADD_USER_PROJECTS,
    ADD_USER_PROJECTS_SUCCESS,
    ADD_USER_PROJECTS_FAILURE,
    GET_USER_PROJECTS,
    GET_USER_PROJECTS_SUCCESS,
    GET_USER_PROJECTS_FAILURE,
} from "../actions/action.types";
import { client } from "../../Utilities/axiosHelper";
export const fetchUserProjects = () => async (dispatch) => {
    dispatch({ type: GET_USER_PROJECTS });
    try {
        const response = await client().get(`/projects`);
        dispatch({ type: GET_USER_PROJECTS_SUCCESS, payload: response.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: GET_USER_PROJECTS_FAILURE });
    }
};

export const addUserProjects = () => async (dispatch) => {
    dispatch({ type: GET_USER_PROJECTS });
    try {
        const response = await client().get(`/projects/create`);
        dispatch({ type: GET_USER_PROJECTS_SUCCESS, payload: response.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: GET_USER_PROJECTS_FAILURE });
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