import * as types from '../actions/action.types'

const initialState = {
    projects: [],
    isLoading: false,
    error_message: '',
    project: {},
    project_success: false,
    project_error: false,
    isAddLoading: false,
    add_project_success: false,
    add_project_error: false
};

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_USER_PROJECTS_STARTED:
            return {
                ...state,
                isAddLoading: true
            }
        case types.ADD_USER_PROJECTS_SUCCESS:
            return {
                ...state,
                isAddLoading: false,
                add_project_success: true,
                add_project_error: false,
                project: action.payload
            }
        case types.ADD_USER_PROJECTS_FAILURE:
            return {
                ...state,
                isAddLoading: false,
                add_project_success: false,
                add_project_error: true,
                error_message: action.payload
            }
        case types.GET_USER_PROJECTS:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_USER_PROJECTS_SUCCESS:
            return {
                ...state,
                project_success: true,
                isLoading: false,
                projects: action.payload
            }
        case types.GET_USER_PROJECTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                project_error: false,
                error_message: action.payload
            }
         case types.GET_SINGLE_PROJECT_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case types.GET_SINGLE_PROJECT_SUCCEEDED:
            return {
                ...state,
                project_success: true,
                isLoading: false,
                project: action.payload
            }
        case types.GET_SINGLE_PROJECT_FAILED:
            return {
                ...state,
                isLoading: false,
                project_error: false,
                error_message: action.payload
            }
        case types.DELETE_PROJECT_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case types.DELETE_PROJECT_SUCCEEDED:
            return {
                ...state,
                project_success: true,
                isLoading: false,
            }
        case types.DELETE_PROJECT_FAILED:
            return {
                ...state,
                isLoading: false,
                project_error: false,
                error_message: action.payload
            }
        default:
            return state;
    }
}