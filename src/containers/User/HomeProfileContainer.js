import React, { Component } from "react";
import HomeProfileComponent from "../../components/HomeProfileComponent";
import {getAuthHeaderValue} from "../../utils/AuthUtils";

class HomeProfileContainer extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      major: "",
      minor: "",
      bio: ""
    };
  }

  componentDidMount() {
    //Get user picture for avatar, what they are studying, and "introduct yourself" description
    console.log(getAuthHeaderValue());
	fetch("http://localhost:8080/persons/current_user/majors", {
      method: 'GET',
	  headers: {
        Authorization: getAuthHeaderValue()
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
      });

  }

  render() {
    return (
      <HomeProfileComponent
        fullName={this.state.fullName}
        major={this.state.major}
        minor={this.state.minor}
        bio={this.state.bio}
      />
    );
  }
}

export default HomeProfileContainer;
