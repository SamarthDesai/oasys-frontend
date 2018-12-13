import React from "react";
import { Link } from "react-router-dom";
import { Menu, Avatar, Icon, Dropdown, Anchor, Button } from "antd";
import LogoutContainer from "../containers/User/LogoutContainer";

const menu = (
  <Anchor>
    <Menu>
      <Menu.Item>
        <Link to="/editProfile">Edit Profile</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="/settings">Settings</Link>
      </Menu.Item>
      <LogoutContainer />
    </Menu>
  </Anchor>
);

export default ({imagePath}) => (
  <Dropdown overlay={menu} style={{ position: "sticky" }}>
    <Avatar
      size="medium"
      src={imagePath}
      style={{ marginLeft: 16, backgroundColor: "white" }}
    />
  </Dropdown>
);
