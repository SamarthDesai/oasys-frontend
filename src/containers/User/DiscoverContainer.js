import React, { Component } from "react";
import { getAuthHeaderValue } from "../../GetToken.js";

class DiscoverContainer extends Component {
  constructor() {
    super();

    this.state = {
      groups: []
    };
  }

  async componentDidMount() {
    let authHeader = getAuthHeaderValue();
    await fetch("http://localhost:8080/search/flocks/" + "duke", {
      method: "GET",
      headers: {
        Authorization: authHeader
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
    return <div />;
  }
}

export default DiscoverContainer;
