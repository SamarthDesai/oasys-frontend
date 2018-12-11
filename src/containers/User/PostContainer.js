import React, {Component} from "react";
import {Col, Row} from "antd";
import {getAuthHeaderValue} from "../../utils/AuthUtils.js";
import PostComponent from "../../components/PostComponent";
import CommentComponent from "../../components/CommentComponent";
import Search from "antd/es/input/Search";
import {postJson} from "../../utils/RestUtils";

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      post_id: this.props.match.params.pid,
      post: {},
      textAreaRef: React.createRef()
    };

    this.loadPostInfo();
  }

  submitComment = async body => {
    console.log(body)
    await postJson("/posts/" + this.state.post_id + "/comment", body, "application/json", false)
    this.loadPostInfo();
  }

  loadPostInfo() {
     fetch("http://localhost:8080/posts/" + this.state.post_id, {
      method: "GET",
      headers: {
        Authorization: getAuthHeaderValue()
      }
    }).then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({post: responseJson})
      });

     fetch("http://localhost:8080/posts/" + this.state.post_id + "/comments", {
      method: "GET",
      headers: {
        Authorization: getAuthHeaderValue()
      }
    }).then(response => response.json())
      .then(responseJson => {
        this.setState({comments: responseJson})
      });
  }
  //
  render() {
    return (
      <Row style={{ marginLeft: 256, marginTop: 64, marginRight: 16 }}>
        <Col type="flex" align="middle" style={{ marginLeft: 16 }}>
          <PostComponent post={this.state.post}/>
          <CommentComponent comments={this.state.comments}/>
          <Search
            placeholder="Add a comment"
            enterButton="Submit"
            size="large"
            onSearch={this.submitComment}
          />
        </Col>
      </Row>
    );
  }
}

export default PostContainer;


