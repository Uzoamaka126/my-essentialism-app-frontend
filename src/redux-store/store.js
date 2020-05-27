import { createStore, compose, applyMiddleware, } from 'redux'
import thunk from 'redux-thunk';
import { logger } from 'redux-logger'
// import { setToken } from '../Utilities/authenticationChecker'
import { rootReducer } from './reducers';

const middleware = [thunk, logger];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    rootReducer,
    {},
    composeEnhancers(
      applyMiddleware(...middleware)
    )
);