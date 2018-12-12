import React, { Component } from "react";
import { List, Avatar, Icon } from "antd";
import Button from "antd/es/button/button";
import Skeleton from "antd/es/skeleton";

export default ({ item, onClick, redirect }) => (
  // TODO: Create backend object for wrapping post/event. Has type var that can be checked here. The two
  // will be rendered in different ways (just different info and hrefs).
  <List.Item
    actions={
      [
        <Button
          type="primary"
          shape="square"
          icon="message"
          text={item.numberOfComments}
          size={48}
          onClick={e=>{ redirect(item.pid)}}
        >
          {" " + item.numberOfComments}
        </Button>
      ]
    }
  >
    <List.Item.Meta
      avatar={<Avatar src={item.flock.photoPath} />}
      title={<a href={"/groups/" + item.flock.gid }>{item.flock.name}</a>}
      description={<a href={"/users/" + item.creator.username } >{item.creator.name}</a>}
    />
    {item.body}
  </List.Item>
);
