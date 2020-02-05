import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { valueReducer } from './valueReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    values: valueReducer
});