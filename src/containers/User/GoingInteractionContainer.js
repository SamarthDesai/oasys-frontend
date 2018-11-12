import React, { Component } from "react";
import EventInteractionComponent from "../../components/EventInteractionComponent";

class GoingInteractionContainer extends Component {
  constructor() {
    super();

    this.state = {
      going: "false",
      totalGoing: 0
    };
  }

  componentDidMount() {
    //Check if something has been pinned by current user, check total pins by all users
  }

  goToEvent = () => {};

  render() {
    return (
      <EventInteractionComponent
        icon="team-o"
        type={this.state.going}
        onClick={this.goToEvent}
        text={this.state.totalGoing}
      />
    );
  }
}

export default GoingInteractionContainer;
