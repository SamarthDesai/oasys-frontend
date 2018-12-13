import React from "react";
import { Link } from "react-router-dom";
import { Menu, Avatar, Dropdown, Anchor } from "antd";
import LogoutContainer from "../containers/User/LogoutContainer";
import { Cookies } from "react-cookie";

const onClick = ({ key }) => {
  if (key === 3) {
    const cookies = Cookies.get("JSESSIONID");
    console.log(cookies);
    cookies.remove("JSESSIONID");
    console.log(cookies);
  }
};

const menu = (
  <Anchor>
    <Menu onClick={onClick}>
      <Menu.Item key="1">
        <Link to="/edit-profile">Edit Profile</Link>
      </Menu.Item>
      {/* <Menu.Item key="2">
        <Link to="/">Settings</Link>
      </Menu.Item> */}
      <Menu.Item key="3">
        <Link to="/">Log Out</Link>
      </Menu.Item>
    </Menu>
  </Anchor>
);

export default ({ photo }) => (
  <Dropdown overlay={menu} style={{ position: "sticky" }}>
    <Avatar
      size="medium"
      src={photo}
      style={{ marginLeft: 16, backgroundColor: "white" }}
    />
  </Dropdown>
);
