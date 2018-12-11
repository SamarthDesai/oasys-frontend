import React, { Component } from "react";
import UserHeaderComponent from "../../components/UserHeaderComponent";
import {userHasAuthenticated} from "../../utils/AuthUtils";

class UserHeaderContainer extends Component {
  constructor() {
    super();

    this.state = { imagePath: "" };
  }
  componentDidMount() {
    //Get user info for profile avatar
  }

  render() {
    return userHasAuthenticated() ? <UserHeaderComponent /> : <div/>;
  }
}

export default UserHeaderContainer;
