import * as types from '../redux-store/actions/action.types';
import { isTokenExpired } from './checkForToken';
export const setToken = store => next => action => {
  if(action.type === types.REGISTER_SUCCEDED || action.type === types.LOGIN_SUCCEDED) {
      // look into the action creators to see that the payload is set to the token 
    localStorage.setItem('user', JSON.stringify(action.user))
  }
  next(action);
}
export const getToken = () => {
    try {
      const token = localStorage.getItem('user');
      if (token === null) {
        return undefined;
      } else {
        const isExpired = isTokenExpired(token); // Check if token is expired
        if (isExpired) {
          clearAppState();
          return undefined;
        }
      }
      // otherwise outside of all these usecases, return the token
      return token;
    } catch (err) {
      return undefined;
    }
  };
  
const STATE = 'SIMPU'

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem(STATE)
    if (serializedState === null) {
      return undefined
    }
    return JSON.parse(serializedState)
  } catch (err) {
    return undefined
  }
}

export const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem(STATE, serializedState)
  } catch (err) {
    console.log(err)
  }
}

export const clearState = () => {
  try {
    localStorage.removeItem(STATE)
  } catch (err) {
    console.log(err)
  }
}

// Define a function to clear the local storage 
export const clearAppState = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
};