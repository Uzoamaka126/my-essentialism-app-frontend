import * as types from '../redux-store/actions/action.types';
// import { isTokenExpired, decodeToken } from './checkForToken';

const STATE = 'ESSENTIALISM'

// export const setToken = store => next => action => {
// if (action.type === types.REGISTER_SUCCEDED || action.type === types.LOGIN_SUCCEDED) {
//   localStorage.setItem(STATE, JSON.stringify(action.user)) // email + token = action.user;
// }
// next(action);
// }
export const setState = state => {
  try {
    const stringifiedState = JSON.stringify(state);
    localStorage.setItem(STATE, stringifiedState)
  } catch (err) {
    console.log(err)
  }
}
export const getState = () => {
  try {
    const userObject = localStorage.getItem(STATE);

    if (userObject === null) {
      return undefined;
    } else {
      // const isExpired = isTokenExpired(userObject); // Check if token is expired
      // if (isExpired) {
      //   clearAppState();
      //   return undefined;
      // }
      return JSON.parse(userObject);
    }
    // otherwise outside of all these usecases, return the token
  } catch (err) {
    return undefined;
  }
};

export const getToken = () => {
  if (getState()) {
    const { token } = getState();
    return token;
  }
  return null
}

export const getUser = () => {
  if (getState()) {
    const { user } = getState()
    return user
  }
  return null
}
  
// Define a function to clear the local storage 
export const clearAppState = () =>{
  try {
    localStorage.removeItem(STATE);
    window.location.href = '/';
  } catch (err) {
    console.log(err)
  }
};