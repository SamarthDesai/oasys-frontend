import React, { Component } from "react";
import { Layout } from "antd";
import UserHeaderContainer from "./containers/User/UserHeaderContainer";
import UserSideBar from "./components/UserSideBar";
import Routes from "./Routes";
import { getToken } from "./utils/AuthUtils"

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
    if (token === null || token === "") {
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
    // Pass isAuthenticated state and userHasAuthenticated function as children props to each Route
    const childProps = {
      isAuthenticated: this.state.isAuthenticated,
      userHasAuthenticated: this.userHasAuthenticated
    };

    return (
      !this.state.isAuthenticating && this.state.isAuthenticated ? (
          <Layout>
            <UserHeaderContainer />
            <Layout>
              <UserSideBar />
              <Routes childProps={childProps} />
            </Layout>
          </Layout>
      ) : <Routes childProps={childProps}/>
    );
  }
}

export default App;
