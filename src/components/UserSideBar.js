import React from "react";
import { Layout, Icon } from "antd";
import HomeProfileContainer from "../containers/User/HomeProfileContainer";
import Calendar from "../containers/User/Calendar";
import PostModalContainer from "../containers/User/PostModalContainer";

const { Sider } = Layout;

export default () => (
  <Sider
    width={256}
    style={{
      overflow: "auto",
      marginTop: 64,
      height: "100%",
      position: "fixed",
      left: 0
    }}
  >
    <HomeProfileContainer />
    <PostModalContainer />
    <Calendar />
  </Sider>
);
