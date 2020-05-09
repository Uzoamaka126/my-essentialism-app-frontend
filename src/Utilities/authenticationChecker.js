import * as types from '../redux-store/actions/action.types';
import { isTokenExpired } from './checkForToken';
export const setToken = store => next => action => {
  if(action.type === types.REGISTER_SUCCEDED || action.type === types.LOGIN_SUCCEDED) {
      // look into the action creators to see that the payload is set to the token 
    localStorage.setItem('token', action.payload);
    localStorage.setItem('user', JSON.stringify(action.user))
  }
  next(action);
}
export const getToken = () => {
    try {
      const token = localStorage.getItem('token');
      if (token === null) {
        return undefined;
      } else {
        const isExpired = isTokenExpired(token); // Check if token is expired
        if (isExpired) {
          clearLocalStorage();
          return undefined;
        }
      }
      // otherwise outside of all these usecases, return the token
      return token;
    } catch {
      return undefined;
    }
  };
  
// Define a function to clear the local storage 
export const clearLocalStorage = () =>{
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/';
};