import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import GeneralHomePage from "./pages/General/GeneralHomePage";
import SignUpPage from "./pages/General/SignUpPage";
import UserHomeContainer from "./containers/User/UserHomeContainer";
import EditProfileContainer from "./containers/User/EditProfileContainer";
import NotFoundPage from "./pages/NotFoundPage";

import GroupPage from "./pages/GroupPage";

import UserGroups from "./containers/User/UserGroups";
import PostContainer from "./containers/User/PostContainer";
import EventListingContainer from "./containers/User/EventListingContainer";
import DiscoverContainer from "./containers/User/DiscoverContainer";


// All the Routes that are rendered on the browser

export default ({ childProps }) => (
  <Switch>

    <AuthenticatedRoute
      path="/groups/:groupName"
      exact component={GroupPage}
      props={childProps}
    />

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
      <AuthenticatedRoute
          path="/events"
          exact component={EventListingContainer}
          props={childProps}
      />
      <AuthenticatedRoute
          path="/discover"
          exact
          component={DiscoverContainer}
          props={childProps}
      />
    <Route component={NotFoundPage} />

  </Switch>
);