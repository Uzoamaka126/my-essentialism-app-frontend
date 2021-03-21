import { client } from "../../Utilities/axiosHelper";
import * as types from "./types/values.types";

export const fetchValues = () => async (dispatch) => {
  dispatch({
    type: types.GET_VALUES_STARTED,
  });
  try {
    const response = await client("values", { data: "", method: "GET" });
    if (response.isSuccessful === true) {
      dispatch({
        type: types.GET_VALUES_SUCCEDED,
        payload: response,
      });
      return true;
    } else if (response.isSuccessful === false) {
      dispatch({
        type: types.GET_VALUES_FAILED,
      });
    } else {
      dispatch({
        type: types.GET_VALUES_FAILED,
      });
    }
  } catch (error) {
    dispatch({
      type: types.GET_VALUES_FAILED,
      payload: error,
    });
  }
};

export const setSelectedProjValue = (value) => (dispatch) => {
  dispatch({ type: types.SELECTED_PROJECT_VALUE, payload: value });
};
