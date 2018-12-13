import React from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import LoginForm from "../containers/General/LoginForm";

const { Header } = Layout;

export default ({ backgroundColor, logo, childProps }) => (
  <Header
    style={{
      position: "fixed",
      zIndex: 1,
      width: "100%",
      backgroundColor: backgroundColor,
      WebkitTransition: "all 500ms linear",
      transition: "all 500ms linear"
    }}
  >
    <Row type="flex" justify="space-between" align="middle">
      <Col>
        <Link to="/">
          <img
            src={logo}
            style={{
              width: "auto",
              height: "48px"
            }}
            alt="oasys"
          />
        </Link>
      </Col>
      <Col>
        <LoginForm childProps={childProps}/>
      </Col>
    </Row>
  </Header>
);
