import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {getToken} from '../_helpers/authenticationChecker'

const ProtectedRoute = ({ component: Component, ...props }) => {
  const token = getToken();
  return (
    <Route
      {...props}
      render={props => {
        if (token) {
          return (
              <Component {...props} />
          );
        } else {
          // Push the target route to local storage, to be accessed upon successful auth
          localStorage.setItem('target-route', props.location.pathname);
          return (
            <Redirect
              to={{
                pathname: '/',
                state: { from: props.location },
              }}
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;