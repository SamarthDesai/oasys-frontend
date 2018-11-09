import React, { Component } from "react";
import { Layout, Icon } from "antd";
import HomeProfile from "./HomeProfile";
import Calendar from "./Calendar";

const { Sider } = Layout;

export default () => (
  <Sider
    width={200}
    style={{
      overflow: "auto",
      marginTop: 64,
      height: "100vh",
      position: "fixed",
      left: 0
    }}
  >
    <HomeProfile />
    <Calendar />
  </Sider>
);
