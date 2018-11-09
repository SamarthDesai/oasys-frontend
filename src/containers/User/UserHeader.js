import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Menu, Button, Avatar } from "antd";

import whiteIcon from "../../images/oasys-icon-white-final.png";
import blueIcon from "../../images/oasys-icon-blue-final.png";

const { Header } = Layout;

class UserHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "transparent",
      icon: blueIcon
    };
  }

  componentDidMount() {
    //Get user info for profile avatar
  }

  render() {
    return (
      <Header
        mode="horizontal"
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: this.state.backgroundColor,
          lineHeight: "64px"
        }}
      >
        <Row type="flex" justify="space-between" align="middle">
          <Col>
            <Link to="/home">
              <img
                src={this.state.icon}
                style={{
                  width: "auto",
                  height: "48px"
                }}
                alt="oasys"
              />
            </Link>
            <Button type="primary" size="large">
              Discover
            </Button>
          </Col>
          <Col>
            <Menu mode="horizontal">
              <Menu.Item key="1">My Groups</Menu.Item>
              <Menu.Item key="2">My Events</Menu.Item>
              <Menu.Item key="3">Saved</Menu.Item>
              <Menu.Item key="4">Notifications</Menu.Item>
              <Avatar
                size="small"
                src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
              />
            </Menu>
          </Col>
        </Row>
      </Header>
    );
  }
}

export default UserHeader;
