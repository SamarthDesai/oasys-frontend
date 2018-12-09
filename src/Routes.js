import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import GeneralHomePage from "./pages/General/GeneralHomePage";
import SignUpPage from "./pages/General/SignUpPage";
import UserHomeContainer from "./containers/User/UserHomeContainer";
import NotFoundPage from "./pages/NotFoundPage";
import HomeAuthenticatedRoute from "./components/HomeAuthenticatedRoute";

// Just use this if they're authenticated

export default ({ childProps }) => (
  <Switch>
    <Route path="/" exact component={UserHomeContainer} />
    <Route path="/signup" exact component={SignUpPage} />
    <Route path="/home" exact component={UserHomeContainer} />
    <Route component={NotFoundPage} />
  </Switch>
);
