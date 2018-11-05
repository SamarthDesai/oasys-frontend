import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import GeneralHomePage from "./pages/General/GeneralHomePage";
import SignUpPage from "./pages/General/SignUpPage";
import NotFoundPage from "./pages/NotFoundPage";

// All the Routes that are rendered on the browser

export default ({ childProps }) => (
  <Switch>
    {/*<AuthenticatedRoute
      path="/"
      exact
      component={GeneralHomePage}
      props={childProps}
    />*/}
    <Route path="/" exact component={GeneralHomePage} />
    <Route path="/signup" exact component={SignUpPage} />
    {/*<Route
      path="/therapists/profiles/:uniqueName"
      exact
      component={TherapistProfile}
    />
    {/* <UnauthenticatedRoute
      path="/signup"
      exact
      component={Signup}
      props={childProps}
    />
    {/* <UnauthenticatedRoute
      path="/create-password"
      exact
      component={NewPassword}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/therapists/info"
      exact
      component={TherapistInfo}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/therapists/edit"
      exact
      component={TherapistEdit}
      props={childProps}
    />
    <AuthenticatedRoute
      path="/superuser/edit/:uniqueName"
      exact
      component={SuperUserEdit}
      props={childProps}
    /> */}
    <Route component={NotFoundPage} />
  </Switch>
);
