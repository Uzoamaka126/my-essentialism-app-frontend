import * as types from "../actions/action.types";

const initialState = {
  values: [],
  isLoading: false,
  error: "",
  topThreeValues: [],
  error_maessage: ""
};

export const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_VALUES_STARTED:
      return {
        ...state,
        isLoading: true,
      };
    case types.GET_VALUES_SUCCEDED:
      return {
        ...state,
        values: action.payload,
        isLoading: false,
      };
    case types.GET_VALUES_FAILED:
      return {
        ...state,
        isLoading: false,
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
        topThreeValues: action.payload,
      };
    case types.GET_TOP_VALUES_FAILED:
      return {
        ...state,
        isLoading: false,
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
        topThreeValues: [...state.topThreeValues, action.payload],
      };
    case types.ADD_TOP_VALUES_FAILED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.DELETE_PROJECT_STARTED:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.DELETE_PROJECT_SUCCEEDED:
        const { id } = action.payload;
      return {
        ...state,
        isLoading: false,
        topThreeValues: state.topThreeValues.filter(item => item.id !== id)
      };
    case types.DELETE_PROJECT_FAILED:
      return {
        ...state,
        isLoading: false,
        error_message: action.payload,
      };
    default:
      return state;
  }
};
