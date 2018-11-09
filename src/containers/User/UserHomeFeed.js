import React, { Component } from "react";
import { List, Avatar, Icon } from "antd";
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
    content: "Come talk to President Price about the future of Duke!"
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
      fetch(API, {
          method: "POST",
          headers: {
              "Content-Type": "application/x-www-form-urlencoded"
          },
          mode: 'no-cors',
          body: JSON.stringify({
              'client_id': 'oasys',
              'client_secret': 'XY7kmzoNzl100@localhost:8080/oauth/token',
              'grant_type': 'password'
          })
      })

          .then(function(response) {
            return response;
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
        });
  }

  render() {
    return (
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: 3
        }}
        dataSource={listData}
        renderItem={item => (
          <List.Item
            key={item.title}
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
            extra={
              <img
                width={272}
                alt="logo"
                src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
              />
            }
          >
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href={item.href}>{item.title}</a>}
              description={item.description}
            />
            {item.content}
          </List.Item>
        )}
      />
    );
  }
}

export default UserHomeFeed;
