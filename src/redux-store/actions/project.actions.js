import {
    ADD_USER_PROJECTS_STARTED,
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
        dispatch({ type: GET_USER_PROJECTS_FAILURE, payload: err.response });
    }
};

export const addUserProject = (project) => async (dispatch) => {
    dispatch({ type: ADD_USER_PROJECTS_STARTED });
    try {
        const response = await client().get(`/projects/create`, project);
        dispatch({ type: ADD_USER_PROJECTS_SUCCESS, payload: response.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: ADD_USER_PROJECTS_FAILURE, payload: err.response });
    }
};