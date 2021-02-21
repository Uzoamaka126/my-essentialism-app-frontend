import * as types from "../actions/types/auth.types";
import { setState } from "../../Utilities/localStorage";

const initialState = {
  user: {},
  token: null,
  registerState: "idle",
  loginState: "idle",
  isAuthUser: false,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOGIN_STARTED:
      return {
        ...state,
        loginState: "loading",
      };
    case types.LOGIN_SUCCEDED:
      setState(action.payload);
      return {
        ...state,
        loginState: "success",
        isAuthUser: true,
      };
    case types.LOGIN_FAILED:
      return {
        ...state,
        loginState: "failed",
        isAuthUser: false,
      };
    case types.REGISTER_STARTED:
      return {
        ...state,
        registerState: "loading",
      };
    case types.REGISTER_SUCCEDED:
      setState(action.payload);
      return {
        ...state,
        registerState: "success",
        user: action.payload,
        token: action.payload.token,
        isAuthUser: true,
      };
    case types.REGISTER_FAILED:
      return {
        ...state,
        registerState: "failed",
        isAuthUser: false,
      };
    case types.LOGOUT:
      return {
        ...state,
        user: {},
        token: null,
      };
    default:
      return state;
  }
};
