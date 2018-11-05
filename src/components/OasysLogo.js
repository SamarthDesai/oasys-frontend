import React from "react";
import { Button, Row, Col } from "antd";
import { Link } from "react-router-dom";

import blueLogo from "../images/oasys-logo-blue-final-cropped-tight.png";

export default () => (
  <Row>
    <Col type="flex" align="middle">
      <Link to="/">
        <img
          src={blueLogo}
          alt="Oasys blue logo"
          style={{ paddingBottom: 16 }}
        />
      </Link>
    </Col>
  </Row>
);
