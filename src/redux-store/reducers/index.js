import { combineReducers } from "redux";
import { authReducer } from './auth.reducer';
import { valueReducer } from './value.reducer';
import { userReducer } from './user.reducer';
import {  projectsReducer } from './projects.reducer'
import {  tasksReducer } from './tasks.reducer'

export const rootReducer = combineReducers({
    auth: authReducer,
    values: valueReducer,
    user: userReducer,
    projects: projectsReducer,
    tasks: tasksReducer
});