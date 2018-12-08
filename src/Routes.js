import React from "react";
import { Route, Switch } from "react-router-dom";
import AuthenticatedRoute from "./components/AuthenticatedRoute";
import UnauthenticatedRoute from "./components/UnauthenticatedRoute";
import GeneralHomePage from "./pages/General/GeneralHomePage";
import SignUpPage from "./pages/General/SignUpPage";
import UserHomeContainer from "./containers/User/UserHomeContainer";
import NotFoundPage from "./pages/NotFoundPage";

// All the Routes that are rendered on the browser

export default ({ childProps }) => (
  <Switch>
    <Route path="/" exact component={GeneralHomePage} />
    <Route path="/signup" exact component={SignUpPage} />
    <Route path="/home" exact component={UserHomeContainer} />
    <Route component={NotFoundPage} />
  </Switch>
);
