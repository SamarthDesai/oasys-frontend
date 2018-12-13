import React from "react";
import { Layout, Icon } from "antd";
import HomeProfileContainer from "../containers/User/HomeProfileContainer";
import Calendar from "../containers/User/Calendar";
import PostModalContainer from "../containers/User/PostModalContainer";
import { userHasAuthenticated } from "../utils/AuthUtils";

const { Sider } = Layout;

export default ({ photo }) =>
  userHasAuthenticated() ? (
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
      <HomeProfileContainer photo={photo} />
      <PostModalContainer />
      {/* <Calendar /> */}
    </Sider>
  ) : (
    <div />
  );
