import React from "react";
import { Menu, Avatar, Icon, Dropdown, Anchor } from "antd";

const menu = (
  <Anchor>
    <Menu>
      <Menu.Item>
        <a href="http://www.alipay.com/" key="edit_profile">Edit Profile</a>
      </Menu.Item>
      <Menu.Item>
        <a href="http://www.taobao.com/" key="settings">Settings</a>
      </Menu.Item>
      <Menu.Item>
        <a href="http://www.tmall.com/" key="logout">Log Out</a>
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
