import React from "react";
import {List, Avatar, Row, Col, Divider} from "antd";
import PinInteractionContainer from "../containers/User/PinInteractionContainer";
import GoingInteractionContainer from "../containers/User/GoingInteractionContainer";
import CommentInteractionContainer from "../containers/User/CommentInteractionContainer";

const { Item } = List;


export default ({ item }) => (
    <Row style={{ marginLeft: 256, marginRight: 16 }}>
    <Col type="flex" align="left" style={{ marginLeft: 16 }}>
  <List.Item
    key={item.title}    
    actions={[
      <PinInteractionContainer />,
      <GoingInteractionContainer />,
    ]}
  >
    <List.Item.Meta
      title={<a href={item.href}>{item.name}</a>}
      description={`${item.location} at ${item.time}`}
    />
    {item.summary}
  </List.Item>
        </Col>
        <Divider />
    </Row>
);