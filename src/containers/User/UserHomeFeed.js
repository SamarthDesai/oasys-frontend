import React, { Component } from "react";
import { List } from "antd";
import FeedPostContainer from "./FeedPostContainer";
import EventListingContainer from "./EventListingContainer";

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
        dataSource={listData}
        renderItem={item => <EventListingContainer item={item} />}
      />
    );
  }
}

export default UserHomeFeed;
