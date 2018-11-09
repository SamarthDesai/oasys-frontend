import React, { Component } from "react";
import { Row, Col, Checkbox } from "antd";
import UserHomeFeed from "./UserHomeFeed";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Groups", "Events"];
const defaultCheckedList = [];

class UserHomeContent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedList: defaultCheckedList,
      indeterminate: true,
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
      <div>
        <Row>
          <Col type="flex" align="middle">
            <div style={{ borderBottom: "1px solid #E9E9E9" }}>
              <Checkbox
                indeterminate={this.state.indeterminate}
                onChange={this.onCheckAllChange}
                checked={this.state.checkAll}
              >
                All
              </Checkbox>
            </div>
            <br />
            <CheckboxGroup
              options={plainOptions}
              value={this.state.checkedList}
              onChange={this.onChange}
            />
            <UserHomeFeed />
          </Col>
        </Row>
      </div>
    );
  }
}

export default UserHomeContent;
