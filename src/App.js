import React, { Component } from "react";
import Routes from "./Routes";

class App extends Component {
  // constructor(props) {
  //   super(props);

  // this.state = {
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

  render() {
    // Pass isAuthenticated state and userHasAuthenticated function as children props to each Route
    // const childProps = {
    //   isAuthenticated: this.state.isAuthenticated,
    //   userHasAuthenticated: this.userHasAuthenticated
    // };

    return (
      // !this.state.isAuthenticating && (
      // <Routes childProps={childProps} />
      <Routes />
      // )
    );
  }
}

export default App;
