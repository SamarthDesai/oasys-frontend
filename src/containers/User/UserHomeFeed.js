import React, { Component } from "react";
import { List } from "antd";
import FeedPostContainer from "./FeedPostContainer";
import EventListingContainer from "./EventListingContainer";
import { getAuthHeaderValue } from "../../GetToken.js";
import PostInteraction from "../../components/PostInteraction";

const listData = [];
//const API = 'localhost/posts/search/getUserFeed';
const API = 'http://localhost:8080/posts/search/getUserFeed?username=john.doe';
//const data = {username: 'john.doe'};

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
    this.load_posts(0);
  }

  async load_posts(page_number) {
    let authHeader = getAuthHeaderValue();
    var self = this;
    await fetch('http://localhost:8080/feed/' + page_number, {
      method: 'GET',
      headers: {
        "Authorization": authHeader,
      }
    }).then((response) => response.json())
      .then(function(responseJson) {
        self.setState({posts: responseJson});
    });
  }

  render() {
    console.log(this.state.posts);
    return (
      <List
      itemLayout="vertical"
      size="large"
      pagination={{
        onChange: page => {
          this.load_posts(page);
          console.log(page);
        },
        pageSize: 100
      }}
      dataSource={this.state.posts}
      renderItem={item => (
        <List.Item
          key={item.pid}
          actions={[
            <PostInteraction
              type="pushpin-o"
              text="35"
              theme="outlined"
              twoToneColor=""
            />,
            <PostInteraction
              type="team-o"
              text="70"
              theme="outlined"
              twoToneColor=""
            />,
            <PostInteraction
              type="message"
              text="2"
              theme="outlined"
              twoToneColor=""
            />
          ]}
        >
        {item.body}
        </List.Item>
      )}
      />
    );
  }
}

export default UserHomeFeed;
