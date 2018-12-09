import React, { Component } from "react";
import UserHeaderComponent from "../../components/UserHeaderComponent";
import {logout} from "../../utils/AuthUtils";

class UserHeaderContainer extends Component {
  constructor() {
    super();

    this.state = { imagePath: "" };
  }
  componentDidMount() {
    //Get user info for profile avatar
  }

  handleClick = e => {
    switch(e) {
      case "logout":
        logout();
        this.props.history.push("/");
    }
  }

  render() {
    return <UserHeaderComponent onClick={this.handleClick} />;
  }
}

export default UserHeaderContainer;
