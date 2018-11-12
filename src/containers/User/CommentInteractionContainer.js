import React, { Component } from "react";
import EventInteractionComponent from "../../components/EventInteractionComponent";

class CommentInteractionContainer extends Component {
  constructor() {
    super();

    this.state = {
      totalComments: 0
    };
  }

  componentDidMount() {
    //Check if something has been pinned by current user, check total pins by all users
  }

  comment = () => {};

  render() {
    return (
      <EventInteractionComponent
        icon="message"
        type=""
        onClick={this.comment}
        text={this.state.totalComments}
      />
    );
  }
}

export default CommentInteractionContainer;
