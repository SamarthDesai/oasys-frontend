import React, { Component } from "react";
import { List } from "antd";
import { getAuthHeaderValue } from "../../utils/AuthUtils.js";
import FeedPostComponent from "../../components/FeedPostComponent";

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
        renderItem={item => <FeedPostComponent item={item}/> }
      />
    );
  }
}

export default UserHomeFeed;
