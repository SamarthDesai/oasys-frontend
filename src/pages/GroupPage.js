import React, { Component } from "react";
import { Row, Col } from "antd";
import GroupListingContainer from "../containers/User/GroupListingContainer"
import OasysLogo from "../components/OasysLogo";

class GroupPage extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.match.params.groupName);
  }

  render() {
    return (
        <Row style={{ marginLeft: 256, marginTop: 64, marginRight: 16 }}>
            <Col type="flex" align="middle" style={{ marginLeft: 16 }}>
              <GroupListingContainer name={this.props.match.params.groupName}/>
            </Col>
        </Row>
    );
  }
}

export default GroupPage;
