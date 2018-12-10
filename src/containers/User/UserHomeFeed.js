import React, { Component } from "react";
import { List } from "antd";
import { getAuthHeaderValue } from "../../utils/AuthUtils.js";
import FeedPostComponent from "../../components/FeedPostComponent";
import {withRouter} from "react-router-dom";
import Button from "antd/es/button/button";

class UserHomeFeed extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: [],
      initLoading: true,
      loading: false,
      pageNumber: 0
    };
    this.loadPosts();
  }

  loadPosts = async () => {
    const pageNumber = this.state.pageNumber;
    let authHeader = getAuthHeaderValue();
    await fetch("http://localhost:8080/feed/posts/" + pageNumber, {
      method: "GET",
      headers: {
        Authorization: authHeader
      }
    })
      .then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({
          posts: this.state.posts.concat(responseJson),
          initLoading: false,
          pageNumber: pageNumber + 1
        });
      });
  }

  redirectToPost = pid => {
    this.props.history.push("/posts/" + pid )
  }

  render() {
    const { initLoading, loading } = this.state;
    const loadMore = !initLoading && !loading ? (
      <div style={{
        textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
      }}
      >
        <Button onClick={this.loadPosts}>Load More</Button>
      </div>
    ) : null;
    console.log(this.state.posts)
    return (
      <List
        itemLayout="horizontal"
        size="large"
        loading={initLoading}
        loadMore={loadMore}
        dataSource={this.state.posts}
        renderItem={item => <FeedPostComponent item={item} redirect={this.redirectToPost} />}
      />
    );
  }
}

export default withRouter(UserHomeFeed);
