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
      logo: whiteIcon
    };
  }

  componentDidMount() {
    //Get user info for profile avatar
  }

  render() {
    return (
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: this.state.backgroundColor
        }}
      >
        <Row type="flex" justify="space-between" align="middle">
          <Col>
            <Link to="/home">
              <img
                src={this.state.logo}
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
            <Menu theme="dark" mode="horizontal">
              <Menu.Item key="1">My Groups</Menu.Item>
              <Menu.Item key="2">My Events</Menu.Item>
              <Menu.Item key="3">Saved</Menu.Item>
              <Menu.Item key="4">Notifications</Menu.Item>
            </Menu>
            <Avatar
              size="small"
              src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            />
          </Col>
        </Row>
      </Header>
    );
  }
}

export default UserHeader;
