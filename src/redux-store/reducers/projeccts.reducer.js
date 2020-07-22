import * as types from '../actions/action.types'

const initialState = {
    projects: [],
    isLoading: false,
    error_message: '',
    project: {},
    project_success: false,
    project_error: false
};

export const projectsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.ADD_USER_PROJECTS_STARTED:
            return {
                ...state,
                isLoading: true
            }
        case types.ADD_USER_PROJECTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                project_success: true,
                project: action.payload
            }
        case types.ADD_USER_PROJECTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                project_error: true,
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
        default:
            return state;
    }
}