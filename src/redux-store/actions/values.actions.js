import { client } from "../../Utilities/axiosHelper";
import * as types from "./types/values.types";

export const fetchValues = () => async (dispatch) => {
  dispatch({
    type: types.GET_VALUES_STARTED,
  });
  try {
    const response = await client("values", { data: "", method: "GET" });
    dispatch({
      type: types.GET_VALUES_SUCCEDED,
      payload: response,
    });
  } catch (error) {
    dispatch({
      type: types.GET_VALUES_FAILED,
      payload: error,
    });
  }
};
