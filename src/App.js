import React, { Component } from "react";
import { Layout, Row, Col } from "antd";
import UserHeaderContainer from "./containers/User/UserHeaderContainer";
import UserSideBar from "./components/UserSideBar";
import { getAuthHeaderValue } from "./GetToken.js";
import Routes from "./Routes";
import { getToken, userHasAuthenticated } from "./utils/AuthUtils";

class App extends Component {
  constructor() {
    super();

    this.state = {
      isAuthenticated: false,
      isAuthenticating: true,
      photo: ""
    };
  }

  // Set authenticated state based on whether or not a user has a session (which occurs if a user is logged in)
  componentDidMount() {
    const token = getToken();
    if (token === undefined || token === "") {
      this.userHasAuthenticated(false);
    } else {
      this.userHasAuthenticated(true);

      fetch("http://localhost:8080/current_user/", {
        method: "GET",
        headers: {
          Authorization: getAuthHeaderValue()
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson != null) {
            this.setState({
              photo: responseJson.photoPath
            });
          }
        });
    }

    this.setState({ isAuthenticating: false });
  }

  userHasAuthenticated = authenticated => {
    this.setState({ isAuthenticated: authenticated });
  };

  render() {
    const childProps = {};

    return userHasAuthenticated() ? (
      <Layout>
        <UserHeaderContainer photo={this.state.photo} />
        <Layout>
          <UserSideBar photo={this.state.photo} />
          <Routes childProps={childProps} />
        </Layout>
      </Layout>
    ) : (
      <Routes childProps={childProps} />
    );
  }
}

export default App;
