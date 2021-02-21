import * as types from "../actions/types/user.types";

export const initialState = {
  fetchUserProfileState: "idle",
  profile: {},
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_PROFILE_STARTED:
      return {
        ...state,
        fetchUserProfileState: "loading",
      };
    case types.GET_USER_PROFILE_SUCCEEDED:
      localStorage.setItem("profile", JSON.stringify(action.payload));
      return {
        ...state,
        fetchUserProfileState: "success",
        profile: action.payload,
      };
    case types.GET_USER_PROFILE_FAILED:
      return {
        ...state,
        fetchUserProfileState: "failed",
      };
    case types.UPDATE_USER_PROFILE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };

    case types.GET_TOP_VALUES_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_TOP_VALUES_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        success: true,
        topThreeValues: action.payload,
      };
    case types.GET_TOP_VALUES_FAILED:
      return {
        ...state,
        isLoading: false,
        success: false,
        error: action.payload,
      };
    case types.ADD_TOP_VALUES_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case types.ADD_TOP_VALUES_SUCCEEDED:
      return {
        ...state,
        isLoading: false,
        success: true,
        topThreeValues: [...state.topThreeValues, action.payload],
      };
    case types.ADD_TOP_VALUES_FAILED:
      return {
        ...state,
        isLoading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
