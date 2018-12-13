import React from "react";
import { Layout, Row, Col, Menu, Button, Avatar, Icon } from "antd";
import { Link } from "react-router-dom";
import blueIcon from "../images/oasys-icon-blue-final-cropped.png";
import WrappedNewGroupModalContainer from "../containers/User/NewGroupModalContainer";

const { Header } = Layout;

export default ({ name, description }) => (
  <div>
    <h1
      style={{
        "text-decoration": "underline"
      }}
    >
      {name}
    </h1>
    <p>{description}</p>
  </div>
);
