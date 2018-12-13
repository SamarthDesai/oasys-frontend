import React from "react";
import { Link } from "react-router-dom";
import { Menu, Avatar, Dropdown, Anchor } from "antd";
import { instanceOf } from 'prop-types';
import LogoutContainer from "../containers/User/LogoutContainer";
import { withCookies, Cookies } from "react-cookie";

const onClick = ({ key }) => {
  if (key == 3) {
    var cookies = document.cookie.split(";");
    console.log(document.cookie)

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
    console.log(document.cookie)
    //cookies.remove("");
  }
};

const menu = (
  <Anchor>
    <Menu onClick={onClick}>
      <Menu.Item key="1">
        <Link to="/">Edit Profile</Link>
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
