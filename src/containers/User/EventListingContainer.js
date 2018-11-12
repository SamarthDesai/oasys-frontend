import React, { Component } from "react";
import EventListingComponent from "../../components/EventListingComponent";

class EventListingContainer extends Component {
  constructor() {
    super();

    this.state = {
      pinned: "false",
      totalPinned: 0
    };
  }

  componentDidMount() {
    //Get information about Event
  }

  render() {
    return <EventListingComponent />;
  }
}

export default EventListingContainer;
