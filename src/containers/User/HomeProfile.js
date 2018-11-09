import React, { Component } from "react";
import { Row, Col, Avatar } from "antd";

class HomeProfile extends Component {
  constructor(props) {
    super(props);

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
      <Row>
        <Col type="flex" align="middle">
          <Avatar
            size={64}
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <h1> {this.state.fullName} </h1>
          <div>
            {" "}
            Studies: {this.state.major} and {this.state.minor}{" "}
          </div>
          <div> {this.state.bio} </div>
        </Col>
      </Row>
    );
  }
}

export default HomeProfile;
