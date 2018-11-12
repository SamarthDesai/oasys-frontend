import React from "react";
import { Button } from "antd";

export default ({ icon, type, onClick, text }) => (
  <span>
    <Button
      shape="circle"
      icon={icon}
      type={type}
      onClick={onClick}
      style={{ marginRight: 8 }}
    />
    {text}
  </span>
);
