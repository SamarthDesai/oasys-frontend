import React from "react";
import { Route, Redirect } from "react-router-dom";

// Route that only activates when a user is authenticated, otherwise redirects to Login page

export default ({ component: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      cProps.isAuthenticated ? (
        <C {...props} {...cProps} />
      ) : (
        <Redirect
          to={`/login?redirect=${props.location.pathname}${
            props.location.search
          }`}
        />
      )
    }
  />
);
