import React, { Component } from "react";
import HomeProfileComponent from "../../components/HomeProfileComponent";
import { getAuthHeaderValue } from "../../utils/AuthUtils";

class HomeProfileContainer extends Component {
  constructor() {
    super();

    this.state = {
      fullName: "",
      majors: [],
      bio: ""
    };
  }

  componentDidMount() {
    //Get user picture for avatar, what they are studying, and "introduct yourself" description
    console.log(getAuthHeaderValue());

    fetch("http://localhost:8080/current_user/majors", {
      method: "GET",
      headers: {
        Authorization: getAuthHeaderValue()
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson != null) {
          var studies = [];
          responseJson.map((major, _idx) => {
            let name = major.name;
            studies.push(name);
          });
          this.setState({ majors: studies });
        }
      });
  }

  render() {
    return (
      <HomeProfileComponent
        fullName={this.props.fullName}
        majors={this.state.majors}
        bio={this.props.bio.substring(0, 40)}
        photo={this.props.photo}
      />
    );
  }
}

export default HomeProfileContainer;
