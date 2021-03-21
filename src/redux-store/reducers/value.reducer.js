import * as types from "../actions/types/values.types";

const initialState = {
  values: [],
  topThreeValues: [],
  fetchAllValuesState: "idle",
  selectedProjectValueObj: {},
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
    case types.SELECTED_PROJECT_VALUE:
      const selectedObj = state.values.find(
        (item) => item.value_name === action.payload
      );
      return {
        ...state,
        selectedProjectValueObj: {
          ...state.selectedProjectValueObj,
          ...selectedObj,
        },
      };
    default:
      return state;
  }
};
