import * as types from '../actions/action.types'

const initialState = {
    tasks: [],
    isLoading: false,
    error_message: '',
    task: {},
    task_success: false,
    task_error: false,
    isAddLoading: false,
    add_task_success: false,
    add_task_error: false
};

export const tasksReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_TASK_STARTED:
            return {
                ...state,
                isAddLoading: true
            }
        case types.ADD_TASK_SUCCEEDED:
            return {
                ...state,
                isAddLoading: false,
                add_task_success: true,
                add_task_error: false,
                tasks: [...state.tasks, action.payload]
            }
        case types.ADD_TASK_FAILED:
            return {
                ...state,
                isAddLoading: false,
                add_task_success: false,
                add_task_error: true,
                error_message: action.payload
            }
        case types.GET_TASKS_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_TASKS_SUCCEEDED:
            return {
                ...state,
                isLoading: false,
                task_success: true,
                tasks: action.payload
            }
        case types.GET_TASKS_FAILED:
            return {
                ...state,
                isLoading: false,
                task_error: false,
                error_message: action.payload,
            }
        case types.DELETE_TASK_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case types.DELETE_TASK_SUCCEEDED:
            return {
                ...state,
                task_success: true,
                isLoading: false,
            }
        case types.DELETE_PROJECT_FAILED:
            return {
                ...state,
                isLoading: false,
                task_error: false,
                error_message: action.payload
            }
        default:
            return state;
    }
}