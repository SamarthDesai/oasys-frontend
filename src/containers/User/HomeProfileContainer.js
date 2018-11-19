import React, { Component } from "react";
import HomeProfileComponent from "../../components/HomeProfileComponent";

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
