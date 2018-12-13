import React, { Component } from "react";
import {List, Avatar, Icon, Col, Row, Divider} from "antd";
import PostInteraction from "./PostInteraction";
import FeedFilter from "./FeedFilter";
import UserHomeFeed from "../containers/User/UserHomeFeed";

export default ({ item }) => (
    <Row style={{ marginLeft: 256, marginRight: 16 }}>
        <Col type="flex" align="left" style={{ marginLeft: 16 }}>
    <List.Item
        // key={item.name}
        actions={[
            <PostInteraction
                icon="pushpin-o"
                type={item.isPinned}
                // onClick={this.pinPost}
                text=""
            />,
            <PostInteraction
                icon="message"
                //onClick={}
            />

        ]}
        extra={
            <img
                width={256}
                alt="group"
                src={item.photoPath}
            />
        }
        
    >
        <List.Item.Meta
            title={<a href={"/groups/" + item.name }>{item.name}</a>}
            description={`${item.description}`}
        />
    </List.Item>
        </Col>
        <Divider />
    </Row>
);