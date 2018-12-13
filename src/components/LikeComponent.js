import React from "react";
import { Button } from "antd";

export default ({ thing, text }) => (
    <span>
    <Button
        shape="circle"
        size="small"
        icon="like-o"
        onClick={thing}
        outline="none"
    />
        {text}
  </span>
);