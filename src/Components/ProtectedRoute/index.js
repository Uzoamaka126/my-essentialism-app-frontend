import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../Utilities/userLoggedInCheck';

const ProtectedRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      isLogin() === true ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/login",
          }}
        />
      )
    }
  />
);


export default ProtectedRoute;
