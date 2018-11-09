import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import GeneralHomePage from "./pages/General/GeneralHomePage";
import SignUpPage from "./pages/General/SignUpPage";
import UserHomePage from "./pages/User/UserHomePage";
import NotFoundPage from "./pages/NotFoundPage";

// All the Routes that are rendered on the browser

export default ({ childProps }) => (
  <Switch>
    {/*<HomeAuthenticatedRoute
      path="/"
      exact
      components={{GeneralHomePage}, {UserHomePage}}
      props={childProps}
    />*/}
    <Route path="/" exact component={GeneralHomePage} />
    <Route path="/signup" exact component={SignUpPage} />
    <Route path="/home" exact component={UserHomePage} />
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
