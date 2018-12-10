import React from "react";
import {List, Avatar, Row, Col} from "antd";
import PinInteractionContainer from "../containers/User/PinInteractionContainer";
import GoingInteractionContainer from "../containers/User/GoingInteractionContainer";
import CommentInteractionContainer from "../containers/User/CommentInteractionContainer";

const { Item } = List;

export default ({ item }) => (
    <Row style={{ marginLeft: 256, marginTop: 64, marginRight: 16 }}>
        <Col type="flex" align="middle" style={{ marginLeft: 16 }}>
  <Item
    key={item.title}
    actions={[
      <PinInteractionContainer />,
      <GoingInteractionContainer />,
      <CommentInteractionContainer />
    ]}
  >
    <List.Item.Meta
      title={<a href={item.href}>{item.name} on {item.time.toString()}</a>}
      description={`Hosted by ${item.group} at ${item.location}`}
    />
    {item.body}
  </Item>
        </Col>
    </Row>
);