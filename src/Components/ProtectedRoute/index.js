import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {getToken} from '../../Utilities/localStorage'

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
          return (
            <Redirect
              to='/login'
            />
          );
        }
      }}
    />
  );
};

export default ProtectedRoute;