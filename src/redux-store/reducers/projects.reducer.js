import * as types from "../actions/types/projects.types";

const initialState = {
  projects: [],
  fetchProjectsState: "idle",
  error_message: "",
  project: {},
  fetchSingleProjState: "idle",
  addProjectState: "idle",
};

export const projectsReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_USER_PROJECTS_STARTED:
      return {
        ...state,
        addProjectState: "loading",
      };
    case types.ADD_USER_PROJECTS_SUCCESS:
      return {
        ...state,
        addProjectState: "success",
        projects: [...state.projects, action.payload],
      };
    case types.ADD_USER_PROJECTS_FAILURE:
      return {
        ...state,
        addProjectState: "failed",
        error_message: action.payload,
      };
    case types.GET_USER_PROJECTS:
      return {
        ...state,
        fetchProjectsState: "loading",
      };
    case types.GET_USER_PROJECTS_SUCCESS:
      return {
        ...state,
        fetchProjectsState: "success",
        projects: action.payload,
      };
    case types.GET_USER_PROJECTS_FAILURE:
      return {
        ...state,
        isLoading: false,
        fetchProjectsState: "failed",
      };
    case types.GET_SINGLE_PROJECT_STARTED:
      return {
        ...state,
        fetchSingleProjState: "loading",
      };
    case types.GET_SINGLE_PROJECT_SUCCEEDED:
      return {
        ...state,
        fetchSingleProjState: "success",
        project: action.payload,
      };
    case types.GET_SINGLE_PROJECT_FAILED:
      return {
        ...state,
        fetchSingleProjState: "failed",
        error_message: action.payload,
      };
    case types.DELETE_PROJECT_STARTED:
      return {
        ...state,
      };
    case types.DELETE_PROJECT_SUCCEEDED:
      const { id } = action.payload;
      debugger;
      return {
        ...state,
        projects: state.projects.filter((item) => item.id !== id),
      };
    case types.DELETE_PROJECT_FAILED:
      return {
        ...state,
        error_message: action.payload,
      };
    default:
      return state;
  }
};
