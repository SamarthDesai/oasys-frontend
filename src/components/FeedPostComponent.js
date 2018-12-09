import React, { Component } from "react";
import { List, Avatar, Icon } from "antd";
import PostInteraction from "./PostInteraction";

export default ({ item }) => (
  <List.Item
    // key={item.title}
    actions={[
      <PostInteraction
        icon="pushpin-o"
        type={item.isPinned}
        // onClick={this.pinPost}
        text=""
      />,
      /*<PostInteraction
        icon="team-o"
        type={this.state.going}
        onClick={this.goToEvent}
        text={this.state.totalGoing}
      />,*/
      <PostInteraction
        icon="message"
        //onClick={} // TODO (Ben): redirect to main page for post which displays comments
      />
    ]}
    extra={
      <img
        width={256}
        alt="event"
        src={item.creator.photoPath}
      />
    }
  >
    <List.Item.Meta
      avatar={<Avatar src={item.creator.photoPath} />}
      title={<a href={item.href}>{item.title}</a>}
      description={`Hosted by: ${item.description}`}
    />
    {item.body}
  </List.Item>
);
