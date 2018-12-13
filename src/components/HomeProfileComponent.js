import React from "react";
import { Row, Col, Avatar } from "antd";

export default ({ fullName, majors, bio, photo }) => (
  <Row style={{ marginTop: 16, marginBottom: 16, color: "white" }}>
    <Col type="flex" align="middle">
      <Avatar
        size={64}
        src= {photo}
        style={{ backgroundColor: "white" }}
      />
      <h1> {fullName} </h1>
      <div>
        {" "}
        Studies: {majors}{" "}
      </div>
      <br />
      <div> {bio} </div>
      <br />
    </Col>
  </Row>
);
