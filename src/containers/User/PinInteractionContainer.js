import React, { Component } from "react";
import EventInteractionComponent from "../../components/EventInteractionComponent";

class PinInteractionContainer extends Component {
  constructor() {
    super();

    this.state = {
      pinned: "false",
      totalPins: 0
    };
  }

  componentDidMount() {
    //Check if something has been pinned by current user, check total pins by all users
  }
  

  pin = () => {};

  render() {
    return (
      <EventInteractionComponent
        icon="pushpin-o"
        type={this.state.pinned}
        onClick={this.pin}
        text={this.state.totalPins}
      />
    );
  }
}

export default PinInteractionContainer;
