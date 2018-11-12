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
    fetch('http://localhost:80/oauth/token', {
	  method: 'POST',
	  body: 'username=b&password=jwtpass&grant_type=password',
	  headers: {
		"Content-Type": "application/x-www-form-urlencoded",
		"Authorization": "Basic " + Buffer.from('oasys:XY7kmzoNzl100').toString('base64'),
	  },
	  mode: 'no-cors'
	}).then(function(response) {
	  return response.json();
	}).then(function(data) {
	  console.log(data);
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
                src="https://today.duke.edu/sites/default/files/styles/story_hero/public/pricemain.jpg?itok=2Inor3zE"
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
