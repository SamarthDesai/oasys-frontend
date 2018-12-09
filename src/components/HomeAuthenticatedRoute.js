import React from "react";
import { Route, Redirect } from "react-router-dom";

// Route that only activates when a user is authenticated, otherwise redirects to General Home Page

export default ({ componentAuth: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      cProps.userHasAuthenticated ? (
        <C {...props} {...cProps} />
      ) : (
        <Redirect
          to={`/?redirect=${props.location.pathname}${props.location.search}`}
        />
      )
    }
  />
);
