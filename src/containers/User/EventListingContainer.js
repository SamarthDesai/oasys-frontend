import React, { Component } from "react";
import EventListingComponent from "../../components/EventListingComponent";
import {getAuthHeaderValue} from "../../utils/AuthUtils";

class EventListingContainer extends Component {
  constructor() {
    super();

    this.state = {
      pinned: "false",
      totalPinned: 0,
        events: []
    };
  }

  componentDidMount() {
      let authHeader = getAuthHeaderValue();
      fetch("http://localhost:8080/current_user/flocks", {
          method: 'GET',
          headers: {
              Authorization: authHeader
          }
      }).then((response) => response.json())
          .then((responseJson) => {
              console.log(responseJson);
              this.setState({'groups': responseJson});
          });
  }

  render() {
    return <EventListingComponent />;
  }
}

export default EventListingContainer;
