import React from "react";
import { Link } from "react-router-dom";
import { Menu, Avatar, Icon, Dropdown, Anchor } from "antd";

const menu = (
  <Anchor>
    <Menu>
      <Menu.Item>
        <a href="https://www.youtube.com/watch?v=mjaayCARwro">Edit Profile</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://www.youtube.com/watch?v=8Zi-BqCPiOk">Settings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="https://www.youtube.com/watch?v=f3NBQcAqyu4&t=2352s">
          Log Out
        </a>
      </Menu.Item>
    </Menu>
  </Anchor>
);

export default () => (
  <Dropdown overlay={menu} style={{ position: "sticky" }}>
    <Avatar
      size="medium"
      src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
      style={{ marginLeft: 16, backgroundColor: "white" }}
    />
  </Dropdown>
);
