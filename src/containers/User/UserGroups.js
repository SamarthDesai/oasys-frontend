import React, { Component } from "react";
import { Button, Col, List, Row, Select } from "antd";
import { getAuthHeaderValue } from "../../utils/AuthUtils";
import GroupListingComponent from "../../components/GroupListingComponent";

const Option = Select.Option;

class UserGroups extends Component {
  constructor(props) {
    super(props);

    this.state = {
      groups: []
    };
  }

  componentDidMount() {
    let authHeader = getAuthHeaderValue();
    fetch("http://localhost:8080/current_user/flocks", {
      method: "GET",
      headers: {
        Authorization: authHeader
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({ groups: responseJson });
      });
  }

  render() {
    return (
      (
        <ul>
          {this.state.groups.map(function(group, index) {
            return (
              <div key={index}>
                <h1>{group.name}</h1>
              </div>
            );
          })}
        </ul>
      ),
      (
        <List
          itemLayout="vertical"
          size="large"
          style={{ marginTop: 64 }}
          dataSource={this.state.groups}
          renderItem={item => <GroupListingComponent item={item} />}
        />
      )
    );
  }
}

export default UserGroups;
