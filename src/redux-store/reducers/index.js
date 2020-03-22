import { combineReducers } from "redux";
import { authReducer } from './authReducer';
import { valueReducer } from './valueReducer';
import { userProfile } from './getUserProfileReducer';

export const rootReducer = combineReducers({
    auth: authReducer,
    values: valueReducer,
    user: userProfile
});