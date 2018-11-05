import React, { Component } from "react";
import { Layout } from "antd";
import GeneralHeader from "../../containers/General/GeneralHeader";
import GeneralHomeContent from "../../containers/General/GeneralHomeContent";
import GeneralFooter from "../../containers/General/GeneralFooter";

class GeneralHomePage extends Component {
  //     isAuthenticated: false,
  //     isAuthenticating: true
  //   };
  // }
  //
  // // Set authenticated state based on whether or not a user has a session (which occurs if a user is logged in)
  // async componentDidMount() {
  //   try {
  //     if (await Auth.currentSession()) {
  //       this.userHasAuthenticated(true);
  //     }
  //   } catch (e) {
  //     if (e !== "No current user") {
  //       alert(e);
  //     }
  //   }
  //
  //   this.setState({ isAuthenticating: false });
  // }
  //
  // userHasAuthenticated = authenticated => {
  //   this.setState({ isAuthenticated: authenticated });
  // };
  //
  // // Handle logging out of user
  // handleLogout = async event => {
  //   await Auth.signOut();
  //
  //   this.userHasAuthenticated(false);
  //
  //   this.props.history.push("/login");
  // };

  render() {
    // Pass isAuthenticated state and userHasAuthenticated function as children props to each Route
    // const childProps = {
    //   isAuthenticated: this.state.isAuthenticated,
    //   userHasAuthenticated: this.userHasAuthenticated
    // };

    return (
      // !this.state.isAuthenticating && (
      <Layout>
        <GeneralHeader />
        <GeneralHomeContent />
        <GeneralFooter />
      </Layout>
      // )
    );
  }
}

export default GeneralHomePage;
