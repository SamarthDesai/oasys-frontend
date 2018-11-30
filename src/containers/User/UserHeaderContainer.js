import React, { Component } from "react";
import UserHeaderComponent from "../../components/UserHeaderComponent";

class UserHeaderContainer extends Component {
  constructor() {
    super();

    this.state = { imagePath: "" };
  }
  componentDidMount() {
    //Get user info for profile avatar
  }

  render() {
    return <UserHeaderComponent />;
  }
}

export default UserHeaderContainer;
