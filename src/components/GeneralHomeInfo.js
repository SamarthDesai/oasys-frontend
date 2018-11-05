import React from "react";
import { Icon, Button, Row, Col } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";

export default () => (
  <div style={{ paddingTop: 32 }}>
    <Row>
      <Col type="flex" align="middle">
        <h1
          style={{
            color: "#3A9CF2",
            fontSize: "32px"
          }}
        >
          {" "}
          Oasys connects you with your school community{" "}
        </h1>
        <Row type="flex" justify="space-around" gutter={16}>
          <Col type="flex" align="middle">
            <ScrollAnimation animateIn="fadeIn">
              <Icon
                type="compass"
                theme="twoTone"
                style={{ fontSize: "32px" }}
              />
              <p> Discover the people, groups, and events at your school </p>
            </ScrollAnimation>
          </Col>
          <Col type="flex" align="middle">
            <ScrollAnimation animateIn="fadeIn" delay={500}>
              <Icon
                type="pushpin"
                theme="twoTone"
                style={{ fontSize: "32px" }}
              />
              <p> Keep track of everything interesting at school </p>
            </ScrollAnimation>
          </Col>
          <Col type="flex" align="middle">
            <ScrollAnimation animateIn="fadeIn" delay={1000}>
              <Icon
                type="message"
                theme="twoTone"
                style={{ fontSize: "32px" }}
              />
              <p> Effectively communicate with your classmates and groups </p>
            </ScrollAnimation>
          </Col>
        </Row>
      </Col>
    </Row>
  </div>
);
