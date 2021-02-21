import * as types from "./types/tasks.types";
import { client } from "../../Utilities/axiosHelper";

// @TODO: Fetch list of tasks based on project id
export const fetchTasks = (id) => async (dispatch) => {
    dispatch({ type: types.GET_TASKS_STARTED });
    try {
        const response = await client().get(`/tasks/${id}`);
        dispatch({ type: types.GET_TASKS_SUCCEEDED, payload: response.data.data.tasks });
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
        dispatch({ type: types.ADD_TASK_SUCCEEDED, payload: response.data.data.task });
    } catch (err) {
        console.log(err);
        dispatch({ type: types.ADD_TASK_FAILED, payload: err.response });
    }
};

// @TODO: Delete task based on a specific ask id
export const deleteTask = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_TASK_STARTED });
    try {
        await client().delete(`/task/delete/${id}`);
        dispatch({ type: types.DELETE_TASK_SUCCEEDED, payload: { id: id } });
    } catch (err) {
        console.log(err);
        dispatch({ type: types.DELETE_TASK_FAILED, payload: err.response });
    }
};

// @TODO: update task based on user, project and task id
export const updateTask = (task) => async (dispatch) => {
    dispatch({ type: types.UPDATE_TASK_STARTED });
    try {
        const response = await client().put(`/tasks/update`, task);
        dispatch({ type: types.UPDATE_TASK_SUCCEEDED, payload: response.data });
    } catch (err) {
        console.log(err);
        dispatch({ type: types.UPDATE_TASK_FAILED, payload: err.response });
    }
};