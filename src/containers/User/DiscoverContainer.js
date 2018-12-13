import React, { Component } from "react";
import { getAuthHeaderValue } from "../../GetToken.js";
import { Button, Col, List, Row, Select } from "antd";
import DiscoverGroupListingComponent from "../../components/DiscoverGroupListingComponent";

class DiscoverContainer extends Component {
  constructor() {
    super();

    this.state = {
      search: "duke",
      groups: []
    };
  }

  loadGroups = async () => {
    let authHeader = getAuthHeaderValue();
    await fetch("http://localhost:8080/search/flocks/" + this.state.search, {
      method: "GET",
      headers: {
        Authorization: authHeader
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        if (responseJson != null) {
          this.setState({ groups: responseJson });
        }
      });
  };

  componentDidMount() {
    this.loadGroups();
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
          renderItem={item => <DiscoverGroupListingComponent item={item} />}
        />
      )
    );
  }
}

export default DiscoverContainer;
