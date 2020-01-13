import { combineReducers, createStore, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { authReducer } from './reducers/authReducer';
import { valueReducer } from './reducers/valueReducer';

const rootReducer = combineReducers({
    auth: authReducer,
    values: valueReducer
});

const middleware = [thunk];

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
);

export default store;