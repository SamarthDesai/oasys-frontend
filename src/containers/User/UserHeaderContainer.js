import React, { Component } from "react";
import UserHeaderComponent from "../../components/UserHeaderComponent";
import {userHasAuthenticated} from "../../utils/AuthUtils";
import {getAuthHeaderValue} from "../../utils/AuthUtils";

class UserHeaderContainer extends Component {
  constructor() {
    super();

    this.state = { imagePath: "" };
  }
  componentDidMount() {
    console.log(getAuthHeaderValue());
    fetch("http://localhost:8080/current_user/", {
      method: 'GET',
      headers: {
        Authorization: getAuthHeaderValue()
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson != null) {
          this.setState(
            { imagePath: responseJson.photoPath}
          )
        }
      });
  }

  render() {
    return userHasAuthenticated() ? <UserHeaderComponent imagePath={this.state.imagePath}/> : <div/>;
  }
}

export default UserHeaderContainer;
