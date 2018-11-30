import React, { Component } from "react";
import { Layout } from "antd";
import UserHeaderContainer from "./containers/User/UserHeaderContainer";
import UserSideBar from "./components/UserSideBar";
import { getAuthHeaderValue } from "./GetToken.js";
import Routes from "./Routes";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true
    };
  }

  // Set authenticated state based on whether or not a user has a session (which occurs if a user is logged in)
  async componentDidMount() {
    try {
      if (await let authHeader = getAuthHeaderValue()) {
        this.userHasAuthenticated(true);
      }
    } catch (e) {
      if (e !== "No current user") {
        alert(e);
      }
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  render() {
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return !this.state.isAuthenticating && this.state.isAuthenticated ? (
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
