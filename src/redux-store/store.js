import { createStore, compose, applyMiddleware, } from 'redux'
import thunk from 'redux-thunk';
import { logger, createLogger } from 'redux-logger'
// import { setToken } from '../Utilities/authenticationChecker'
import { rootReducer } from './reducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const loggerMiddleWare = createLogger({
  predicate: () => process.env.NODE_ENV === 'development'
});

const middleware = [thunk, loggerMiddleWare];

export const store = createStore(
    rootReducer,
    {},
    composeEnhancers(
      applyMiddleware(...middleware)
    )
);