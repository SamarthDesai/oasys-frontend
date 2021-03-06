import React from "react";
import { Layout, Icon } from "antd";
import HomeProfileContainer from "../containers/User/HomeProfileContainer";
import Calendar from "../containers/User/Calendar";
import WrappedPostModalContainer from "../containers/User/PostModalContainer";
import { userHasAuthenticated } from "../utils/AuthUtils";

const { Sider } = Layout;

export default ({ fullName, photo, bio }) =>
  userHasAuthenticated() ? (
    <Sider
      width={256}
      style={{
        overflow: "auto",
        marginTop: 64,
        height: "100%",
        position: "fixed",
        backgroundColor: "transparent",
        left: 0
      }}
    >
      <HomeProfileContainer fullName={fullName} photo={photo} bio={bio} />
      <WrappedPostModalContainer />
      {/* <Calendar /> */}
    </Sider>
  ) : (
    <div />
  );
