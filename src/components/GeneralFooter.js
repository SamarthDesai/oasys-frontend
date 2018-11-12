import React from "react";
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

export default () => (
  <Footer>
    <div style={{ paddingTop: 32 }}>
      <Row>
        <Col type="flex" align="middle">
          <p style={{ margin: 0 }}> Oasys ©2018 Created by 316 Squad </p>
        </Col>
      </Row>
    </div>
  </Footer>
);
