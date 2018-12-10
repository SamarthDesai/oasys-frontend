import React, { Component } from "react";
import {List, Avatar, Icon, Col, Row} from "antd";
import PostInteraction from "./PostInteraction";
import FeedFilter from "./FeedFilter";
import UserHomeFeed from "../containers/User/UserHomeFeed";

export default ({ item }) => (
    <Row style={{ marginLeft: 256, marginTop: 64, marginRight: 16 }}>
        <Col type="flex" align="middle" style={{ marginLeft: 16 }}>
    <List.Item
        // key={item.name}
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
              onClick={this.goToGroupPage}
              text={this.state.totalGoing}
            />,*/
            <PostInteraction
                icon="message" // TODO: CHANGE ICON (Archana)
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
            title={<a href={item.href}>{item.name}</a>}
            description={`This group is ${item.photoPath}`}
            //description={`This group is ${item.name}`}
        />
    </List.Item>
        </Col>
    </Row>
);