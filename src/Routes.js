import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import GeneralHomePage from "./pages/General/GeneralHomePage";
import SignUpPage from "./pages/General/SignUpPage";
import UserHomeContainer from "./containers/User/UserHomeContainer";
import EditProfileContainer from "./containers/User/EditProfileContainer";
import NotFoundPage from "./pages/NotFoundPage";
import UserGroups from "./containers/User/UserGroups";
import PostContainer from "./containers/User/PostContainer";

// All the Routes that are rendered on the browser

export default ({ childProps }) => (
  <Switch>
    <Route path="/" exact component={GeneralHomePage} props={childProps} />
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
      <AuthenticatedRoute
          path={"/groups"}
          exact
          component={UserGroups}
          props={childProps}
      />
    <AuthenticatedRoute
      path="/posts/:pid"
      exact component={PostContainer}
      props={childProps}
    />
    <Route component={NotFoundPage} />
  </Switch>
);