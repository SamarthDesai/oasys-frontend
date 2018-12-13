import React, {Component} from "react";
import {Col, Row} from "antd";
import {getAuthHeaderValue} from "../../utils/AuthUtils.js";
import PostComponent from "../../components/PostComponent";
import CommentComponent from "../../components/CommentComponent";
import Search from "antd/es/input/Search";
import {postJson} from "../../utils/RestUtils";
import {withRouter} from "react-router-dom";

class PostContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      comments: [],
      post_id: this.props.match.params.pid,
      post: {},
      textAreaRef: React.createRef(),
        likes: [],
        numLikes: 0,
        liked: false
    };

    this.action = this.action.bind(this);

    this.loadPostInfo();
  }

  submitComment = async body => {
    console.log(body)
    await postJson("/posts/" + this.state.post_id + "/comment", body, "application/json", false)
    this.loadPostInfo();
  }

  loadPostInfo() {
      console.log("POST ID: " + this.state.post_id);
      fetch("http://localhost:8080/posts/" + this.state.post_id, {
          method: "GET",
          headers: {
              Authorization: getAuthHeaderValue()
          }
      }).then(response => response.json())
          .then(responseJson => {
              console.log("post id : " + this.state.post_id);
              console.log(responseJson);
              this.setState({post: responseJson})
          }).catch(error => {
          this.props.history.push("/home");
      });

      fetch("http://localhost:8080/posts/" + this.state.post_id + "/comments", {
          method: "GET",
          headers: {
              Authorization: getAuthHeaderValue()
          }
      }).then(response => response.json())
          .then(responseJson => {
              console.log("here are the comments : " + responseJson);
              this.setState({comments: responseJson})
          })
          .catch(error => {
              this.props.history.push("/home")
          });


      fetch("http://localhost:8080/posts/" + this.state.post_id + "/likers", {
          method: "GET",
          headers: {
              Authorization: getAuthHeaderValue()
          }
      }).then(response => response.json())
          .then(responseJson => {
              console.log("LIKES: " + responseJson);
              if (responseJson != null) {
                  var likers = [];
                  responseJson.map((uid, _idx) => {
                      let person = uid.uid;
                      likers.push(person);
                  });
                  this.setState({ likes: likers });
                  this.setState({numLikes: this.state.likes.length});
              }
          })
          .catch(error => {
              this.props.history.push("/home");
          })
  }

  async action() {
      console.log("POST ID IN ACTIONS AHH: " + this.state.post_id);
      await postJson("/current_user/like/" + this.state.post_id, {});
      this.loadPostInfo();
  }

  render() {
      if (this.state.comments.length === 0) {
          return (
              <Row style={{marginLeft: 256, marginTop: 64, marginRight: 16}}>
                  <Col type="flex" align="middle" style={{marginLeft: 16}}>
                      <PostComponent post={this.state.post} numLikes={this.state.numLikes} action={this.action}/>
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
      else {
          return (
              <Row style={{marginLeft: 256, marginTop: 64, marginRight: 16}}>
                  <Col type="flex" align="middle" style={{marginLeft: 16}}>
                      <PostComponent post={this.state.post} numLikes={this.state.numLikes} action={this.action}/>
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
}

export default withRouter(PostContainer);


