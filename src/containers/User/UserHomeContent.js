import React, { Component } from "react";
import { Row, Col, Checkbox } from "antd";
import UserHomeFeed from "./UserHomeFeed";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Groups", "Events"];
const defaultCheckedList = ["Groups", "Events"];

class UserHomeContent extends Component {
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
      <Row style={{ marginLeft: 200, marginTop: 64 }}>
        <Col type="flex" align="middle" style={{ marginLeft: 16 }}>
          <div
            style={{
              borderBottom: "1px solid #E9E9E9",
              marginTop: 16,
              paddingBottom: 8
            }}
          >
            <span>
              <Checkbox
                indeterminate={this.state.indeterminate}
                onChange={this.onCheckAllChange}
                checked={this.state.checkAll}
              >
                All
              </Checkbox>
              <br />
              <CheckboxGroup
                options={plainOptions}
                value={this.state.checkedList}
                onChange={this.onChange}
              />
            </span>
          </div>
          <UserHomeFeed />
        </Col>
      </Row>
    );
  }
}

export default UserHomeContent;
