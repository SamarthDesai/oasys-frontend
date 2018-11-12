import React, { Component } from "react";
import { List, Avatar, Icon } from "antd";
import PostInteraction from "../../components/PostInteraction";

export default () => (
  <List.Item
    key={item.title}
    actions={[
      <PostInteraction
        icon="pushpin-o"
        type={this.state.pinned}
        onClick={this.pinPost}
        text={this.state.totalPinned}
      />,
      <PostInteraction
        icon="team-o"
        type={this.state.going}
        onClick={this.goToEvent}
        text={this.state.totalGoing}
      />,
      <PostInteraction
        icon="message"
        type={this.state.commented}
        onClick={this.comment}
        text={this.state.totalComments}
      />
    ]}
    extra={
      <img
        width={256}
        alt="event"
        src="https://today.duke.edu/sites/default/files/styles/story_hero/public/pricemain.jpg?itok=2Inor3zE"
      />
    }
  >
    <List.Item.Meta
      avatar={<Avatar src={item.avatar} />}
      title={<a href={item.href}>{item.title}</a>}
      description={`Hosted by: ${item.description}`}
    />
    {item.content}
  </List.Item>
);
