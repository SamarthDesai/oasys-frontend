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
      <GoingInteractionContainer event_id={item.eid}/>,
    ]}
  >
    <List.Item.Meta
      title={<a href={item.href}>{item.name}</a>}
      description={`${item.location} at ${item.time}`}
    />
    {item.summary}
      {item.eid}
  </Item>
        </Col>
    </Row>
);