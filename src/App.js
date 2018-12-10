import React, { Component } from "react";
import { Layout } from "antd";
import UserHeaderContainer from "./containers/User/UserHeaderContainer";
import UserSideBar from "./components/UserSideBar";
import { getAuthHeaderValue } from "./GetToken.js";
import Routes from "./Routes";
import {getToken, userHasAuthenticated} from "./utils/AuthUtils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  // Set authenticated state based on whether or not a user has a session (which occurs if a user is logged in)
  componentDidMount() {
    const token = getToken();
    if (token === undefined || token === "") {
      this.userHasAuthenticated(false);
    } else {
      this.userHasAuthenticated(true);
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  render() {
    const childProps = {
    };

    return userHasAuthenticated() ? (
      <Layout>
        <UserHeaderContainer />
        <Layout>
          <UserSideBar />
          <Routes childProps={childProps} />
        </Layout>
      </Layout>
    ) : (
      <Routes childProps={childProps} />
    );
  }
}

export default App;
