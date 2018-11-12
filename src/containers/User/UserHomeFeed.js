import React, { Component } from "react";
import { List } from "antd";
import FeedPostContainer from "./FeedPostContainer";
import EventListingContainer from "./EventListingContainer";

const listData = [];
for (let i = 0; i < 10; i++) {
  listData.push({
    href: "http://bschwenn.com/",
    title: "Come have dinner with President Price!",
    avatar: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    description: "Duke Conversations",
    content:
      "Come talk to President Price about the future of Duke! fjeiospfjesiofjdsklfjdskl fjdsklfj ldskfj sklfj elisfjs klf jskldfj skljf elsijf dsklf jdsklfj dsklfj sklfj eils jfkldsf jsdklf j"
  });
}

class UserHomeFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    //Get information about posts!
  }

  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        dataSource={listData}
        renderItem={item => <EventListingContainer item={item} />}
      />
    );
  }
}

export default UserHomeFeed;
