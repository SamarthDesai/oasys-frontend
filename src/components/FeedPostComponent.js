import React, { Component } from "react";
import { List, Avatar, Icon } from "antd";
import { Button, Skeleton } from "antd";

export default ({ item, onClick, redirect }) => (
  // TODO: Create backend object for wrapping post/event. Has type var that can be checked here. The two
  // will be rendered in different ways (just different info and hrefs).
  <List.Item
    actions={[
      <Button
        type="primary"
        icon="message"
        text={item.numberOfComments}
        size="default"
        onClick={e => {
          redirect(item.pid);
        }}
      >
        {" " + item.numberOfComments}
      </Button>
    ]}
  >
    <List.Item.Meta
      avatar={<Avatar src={item.flock.photoPath} />}
      title={<a href={"/groups/" + item.flock.name }>{item.flock.name}</a>}
      description={<a href={"/users/" + item.creator.username } > by {item.creator.name}</a>}
      title={<a href={"/groups/" + item.flock.name}>{item.flock.name}</a>}
      description={
        <a href={"/users/" + item.creator.username}>by {item.creator.name}</a>
      }
    />
    {item.body}
  </List.Item>
);
