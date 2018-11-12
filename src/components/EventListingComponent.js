import React from "react";
import { List, Avatar } from "antd";
import PinInteractionContainer from "../containers/User/PinInteractionContainer";
import GoingInteractionContainer from "../containers/User/GoingInteractionContainer";
import CommentInteractionContainer from "../containers/User/CommentInteractionContainer";

const { Item } = List;

export default ({ item }) => (
  <Item
    key={item.title}
    actions={[
      <PinInteractionContainer />,
      <GoingInteractionContainer />,
      <CommentInteractionContainer />
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
  </Item>
);
