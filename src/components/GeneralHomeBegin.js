import React, { Component } from "react";
import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

import students from "../images/students-homepage-image.jpg";

export default () => (
  <div>
    <img
      src={students}
      style={{ width: "100%", height: "auto", position: "relative" }}
      alt="Students walking around"
    />
    <Row
      type="flex"
      align="middle"
      style={{
        position: "absolute",
        margin: "auto",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0
      }}
    >
      <Col type="flex" align="middle" span={12} offset={6}>
        <h1
          style={{
            color: "white"
          }}
        >
          College is an experience. Take full advantage.
        </h1>
        <Link to="/signup">
          <Button type="primary" size="large">
            Get Started
          </Button>
        </Link>
      </Col>
    </Row>
  </div>
);
