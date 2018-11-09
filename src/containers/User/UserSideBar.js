import React, { Component } from "react";
import { Layout, Icon } from "antd";
import HomeProfile from "./HomeProfile";
import Calendar from "./Calendar";

const { Header, Content, Sider } = Layout;

class UserSideBar extends Component {
  render() {
    return (
      <Sider
        style={{
          overflow: "auto",
          height: "100vh",
          position: "fixed",
          left: 0
        }}
      >
        <HomeProfile />
        <Calendar />
      </Sider>
    );
  }
}

export default UserSideBar;
