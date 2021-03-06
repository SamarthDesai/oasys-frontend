import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col, Menu, Button, Avatar, Icon } from "antd";
import UserProfileDropdownContainer from "../containers/User/UserProfileDropdownContainer";

import whiteIcon from "../images/oasys-icon-white-final-cropped.png";
import blueIcon from "../images/oasys-icon-blue-final-cropped.png";
import WrappedNewGroupModalContainer from "../containers/User/NewGroupModalContainer";

const { Header } = Layout;

export default ({ photo, childProps }) => (
  <Header
    mode="horizontal"
    style={{
      position: "fixed",
      zIndex: 1,
      width: "100%",
      backgroundColor: "#6699CC",
      lineHeight: "0px"
    }}
  >
    <Row
      type="flex"
      justify="space-between"
      align="middle"
      style={{ marginTop: 8 }}
    >
      <Col>
        <Row type="flex" align="middle">
          <Link to="/home">
            <img
              src={whiteIcon}
              style={{
                height: "48px"
              }}
              alt="oasys"
            />
          </Link>
          <Link to="/discover">
            <Button type="primary" size="large" style={{ marginLeft: 16 }}>
              Discover
            </Button>
          </Link>
          <WrappedNewGroupModalContainer />
        </Row>
      </Col>
      <Col>
        <Row type="flex" align="middle">
          <Menu mode="horizontal">
            <Menu.Item key="1">
              My Groups
              <Link to="/groups" />
            </Menu.Item>
            <Menu.Item key="2">
              My Events
              <Link to="/events" />
            </Menu.Item>
            {/*
            <Menu.Item key="3">Pinned</Menu.Item>
            */}
          </Menu>
          <UserProfileDropdownContainer photo={photo} childProps={childProps} />
        </Row>
      </Col>
    </Row>
  </Header>
);
