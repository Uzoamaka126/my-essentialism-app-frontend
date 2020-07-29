import { combineReducers } from "redux";
import { authReducer } from './auth.reducer';
import { valueReducer } from './value.reducer';
import { userProfileReducer } from './user.reducer';
import {  projectsReducer } from './projeccts.reducer'
import {  tasksReducer } from './tasks.reducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    values: valueReducer,
    user: userProfileReducer,
    projects: projectsReducer,
    tasks: tasksReducer
});