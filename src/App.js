import React, { Component } from "react";
import { Layout } from "antd";
import UserHeaderContainer from "./containers/User/UserHeaderContainer";
import UserSideBar from "./components/UserSideBar";
import Routes from "./Routes";
import {getAuthHeaderValue, getToken} from "./utils/AuthUtils";
import GeneralHeaderContainer from "./containers/General/GeneralHeaderContainer";
import GeneralHomePage from "./pages/General/GeneralHomePage";

class App extends Component {
  constructor() {
    super();
  }

  // Set authenticated state based on whether or not a user has a session (which occurs if a user is logged in)
  componentDidMount() {
    const token = getToken();
    if (token === undefined || token === "") {
      this.userHasAuthenticated(false);
    } else {
      this.userHasAuthenticated(true);
    }
  }

  userHasAuthenticated = () => {
    return getToken() !== undefined;
  };

  render() {
    // Pass isAuthenticated state and userHasAuthenticated function as children props to each Route
    const loggedIn = this.userHasAuthenticated();
    const childProps = {
      userHasAuthenticated: loggedIn
    };

    return (
      (loggedIn) ? (
          <Layout>
            <UserHeaderContainer />
            <Layout>
              <UserSideBar />
              <Routes childProps={childProps} />
            </Layout>
          </Layout>
      ) : <GeneralHomePage childProps={childProps}/>
    );
  }
}

export default App;
