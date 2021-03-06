import * as types from "../actions/types/auth.types";
import { setState } from "../../Utilities/localStorage";

const initialState = {
  user: {
    email: "",
    token: "",
    userId: "",
    id: ""
  },
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
        user: {
          ...state.user,
          email: action.payload.email,
          token: action.payload.token,
          userId: action.payload.userId,
          id: action.payload.id
        },
        token: action.payload.token,
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
        user: {
          ...state.user,
          email: action.payload.email,
          token: action.payload.token,
          userId: action.payload.userId,
          id: action.payload.id,
        },
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
    case types.SET_IS_AUTHENTICATED: 
      return {
        ...state,
        isAuthUser: true,
      };
    default:
      return state;
  }
};
