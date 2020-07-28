import * as types from "../actions/action.types";
import { client } from "../../Utilities/axiosHelper";

// @TODO: Fetch list of tasks based on user and project id
export const fetchTasks = (id) => async (dispatch) => {
    dispatch({ type: types.GET_TASKS_STARTED });
    try {
        const response = await client().get(`/tasks/${id}`);
        dispatch({ type: types.GET_TASKS_SUCCEEDED, payload: response.data.data.projects });
    } catch (err) {
        console.log(err);
        dispatch({ type: types.GET_TASKS_FAILED, payload: err.response });
    }
};

// @TODO: Create a new task based on user and project id
export const addTask = (task) => async (dispatch) => {
    dispatch({ type: types.ADD_TASK_STARTED });
    try {
        const response = await client().post(`/tasks/create`, task);
        dispatch({ type: types.ADD_TASK_SUCCEEDED, payload: response.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: types.ADD_TASK_FAILED, payload: err.response });
    }
};

// @TODO: Delete task based on user, project and task id
export const deleteTask = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_TASK_STARTED });
    try {
        const response = await client().delete(`/task/delete/${id}`);
        dispatch({ type: types.DELETE_TASK_SUCCEEDED, payload: response.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: types.DELETE_TASK_FAILED, payload: err.response });
    }
};

// @TODO: update task based on user, project and task id
export const updateTask = (name, id) => async (dispatch) => {
    dispatch({ type: types.UPDATE_TASK_STARTED });
    try {
        const response = await client().put(`/tasks/update/${id}`, name);
        dispatch({ type: types.UPDATE_TASK_SUCCEEDED, payload: response.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: types.UPDATE_PROJECT_FAILED, payload: err.response });
    }
};