import React from "react";
import { Menu } from "antd";
import { Link } from "react-router-dom";

export default ({ onClick }) => (
  <Menu.Item>
    <Link onClick={onClick}>Log Out</Link>
  </Menu.Item>
);
