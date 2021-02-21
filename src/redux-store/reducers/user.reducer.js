import * as types from "../actions/types/user.types";
import { getState, setState } from "../../Utilities/localStorage";

export const initialState = {
  loading: false,
  profile: {},
  error: "",
};

export const userProfileReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USER_PROFILE_STARTED:
      return {
        ...state,
        loading: true,
      };
    case types.GET_USER_PROFILE_SUCCEEDED:
      const { payload: userProfile } = action;
      const previousLocalStorage = getState();
      setState({ ...previousLocalStorage, userProfile });
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case types.UPDATE_USER_PROFILE_SUCCEEDED:
      return {
        ...state,
        loading: false,
        profile: action.payload,
      };
    case types.GET_USER_PROFILE_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload,
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
