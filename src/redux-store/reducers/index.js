import { combineReducers } from "redux";
import { authReducer } from './auth.reducer';
import { valueReducer } from './value.reducer';
import { userProfileReducer } from './user.reducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    values: valueReducer,
    user: userProfileReducer
});