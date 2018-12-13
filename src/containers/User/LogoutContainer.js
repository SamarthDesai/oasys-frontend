import React, { Component } from "react";
import LogoutComponent from "../../components/LogoutComponent";
import { Cookies } from "react-cookie";
import { withRouter } from "react-router-dom";

//Not working, please fix
class LogoutContainer extends Component {
  logOut = e => {
    this.props.history.push("/");
  };

  render() {
    return <LogoutComponent onClick={this.logOut} />;
  }
}

export default withRouter(LogoutContainer);
