import React from "react";
import { Icon } from "antd";

export default ({ type, text, theme, twoToneColor }) => (
  <span>
    <Icon
      type={type}
      style={{ marginRight: 8 }}
      theme={theme}
      twoToneColor={twoToneColor}
    />
    {text}
  </span>
);
