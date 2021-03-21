import * as types from "../actions/types/values.types";

const initialState = {
  values: [],
  topThreeValues: [],
  fetchAllValuesState: "idle",
};

export const valueReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_VALUES_STARTED:
      return {
        ...state,
        fetchAllValuesState: "loading",
      };
    case types.GET_VALUES_SUCCEDED:
      return {
        ...state,
        fetchAllValuesState: "success",
        values: action.payload,
      };
    case types.GET_VALUES_FAILED:
      return {
        ...state,
        fetchAllValuesState: "failed",
      };

    default:
      return state;
  }
};
