import React from "react";
import { Route, Redirect } from "react-router-dom";
import {userHasAuthenticated} from "../utils/AuthUtils";

// Route that only activates when a user is authenticated, otherwise redirects to General Home Page

export default ({ component: C, props: cProps, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      userHasAuthenticated() ? (
        <C {...props} {...cProps} />
      ) : (
        <Redirect
          to={`/?redirect=${props.location.pathname}${props.location.search}`}
        />
      )
    }
  />
);
