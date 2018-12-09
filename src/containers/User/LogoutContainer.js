import React, { Component } from "react";
import LogoutComponent from "../../components/LogoutComponent";
import { Cookies } from "react-cookie";
import { withRouter } from "react-router-dom";

//Not working, please fix
class LogoutContainer extends Component {
  logOut = e => {
    const cookies = Cookies.get("JSESSIONID");
    cookies.remove("JSESSIONID");
    this.props.history.push("/");
  };

  render() {
    return <LogoutComponent onClick={this.logOut} />;
  }
}

export default withRouter(LogoutContainer);
