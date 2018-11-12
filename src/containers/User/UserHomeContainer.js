import React, { Component } from "react";
import { Row, Col } from "antd";
import FeedFilter from "../../components/FeedFilter";
import UserHomeFeed from "./UserHomeFeed";

const plainOptions = ["Groups", "Events"];
const defaultCheckedList = ["Groups", "Events"];

class UserHomeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: false,
      checkAll: true
    };
  }

  onChange = checkedList => {
    this.setState({
      checkedList,
      indeterminate:
        !!checkedList.length && checkedList.length < plainOptions.length,
      checkAll: checkedList.length === plainOptions.length
    });
  };

  onCheckAllChange = e => {
    this.setState({
      checkedList: e.target.checked ? plainOptions : [],
      indeterminate: false,
      checkAll: e.target.checked
    });
  };

  render() {
    return (
      <Row style={{ marginLeft: 256, marginTop: 64, marginRight: 16 }}>
        <Col type="flex" align="middle" style={{ marginLeft: 16 }}>
          <FeedFilter
            onChange={this.onChange}
            onCheckAllChange={this.onCheckAllChange}
            plainOptions={plainOptions}
            {...this.state}
          />
          <UserHomeFeed checked={this.state.checkedList} />
        </Col>
      </Row>
    );
  }
}

export default UserHomeContainer;
