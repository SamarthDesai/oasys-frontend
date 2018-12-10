import React from "react";
import {Redirect, Route, Switch} from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import GeneralHomePage from "./pages/General/GeneralHomePage";
import SignUpPage from "./pages/General/SignUpPage";
import UserHomeContainer from "./containers/User/UserHomeContainer";
import EditProfileContainer from "./containers/User/EditProfileContainer";
import NotFoundPage from "./pages/NotFoundPage";
import {userHasAuthenticated} from "./utils/AuthUtils";

// All the Routes that are rendered on the browser

export default ({ childProps }) => (
  <Switch>
    <Route
      path="/"
      render={props =>
        userHasAuthenticated() ? (
          <UserHomeContainer props={childProps} />
        ) : (
          <GeneralHomePage/>
        )
      }
    />
    <UnauthenticatedRoute
      path="/signup"
      exact
      component={SignUpPage}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/home"
      exact
      component={UserHomeContainer}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/edit-profile"
      exact
      component={EditProfileContainer}
      props={childProps}
    />
    <Route component={NotFoundPage} />
  </Switch>
);
