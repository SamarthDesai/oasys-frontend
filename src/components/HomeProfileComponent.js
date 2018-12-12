import React from "react";
import { Row, Col, Avatar } from "antd";

export default ({ fullName, major, minor, bio }) => (
  <Row style={{ marginTop: 16, marginBottom: 16, color: "white" }}>
    <Col type="flex" align="middle">
      <Avatar
        size={64}
        src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
        style={{ backgroundColor: "white" }}
      />
      <h1> {fullName} </h1>
      <div>
        {" "}
        Studies: {major} and {minor}{" "}
      </div>
      <div> {bio} </div>
    </Col>
  </Row>
);
