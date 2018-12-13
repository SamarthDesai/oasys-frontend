import React from "react";
import { Row, Col, Avatar } from "antd";

export default ({ fullName, majors, bio, photo }) => (
  <Row
    style={{
      margin: 16,
      padding: 16,
      backgroundColor: "white",
      color: "black",
      boxShadow:
        "0px 1px 5px 0px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 3px 1px -2px rgba(0, 0, 0, 0.12)"
    }}
  >
    <Col type="flex" align="middle">
      <Avatar size={64} src={photo} style={{ backgroundColor: "white" }} />
      <h1> {fullName} </h1>
      <div> Studies: {majors} </div>
      <br />
      <div> {bio} </div>
    </Col>
  </Row>
);
