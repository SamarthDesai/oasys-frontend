import React, {Component} from "react";
import {Modal, Button, Form, Select, Radio, Input, List} from 'antd';
import {postJson} from "../../utils/RestUtils";
import {getAuthHeaderValue} from "../../utils/AuthUtils";
import {withRouter} from "react-router-dom";
import GroupInfo from "../../components/GroupInfo";
import EventInteractionComponent from "../../components/EventInteractionComponent";
import FeedPostComponent from "../../components/FeedPostComponent";


const {TextArea} = Input;
const FormItem = Form.Item;
const Option = Select.Option;

class IndividualEventContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      eID: this.props.eid,
        initLoading: true,
        initLoadingPosts: true,
        loading: false,
        pageNumber: 0,
        posts: []
    };
    this.loadEventInfo();
    console.log(this.state.eID);
  }

  loadEventInfo = async () => {
    let authHeader = getAuthHeaderValue();
    await fetch("http://localhost:8080/events/" + this.state.eID, {
      method: 'GET',
      headers: {
                Authorization: authHeader
            }
    }).then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState( {'eventInfo': responseJson,
                        'initLoading': false});
      })
      //this.loadPosts();
  }

  // loadPosts = async () => {
  //     const pageNumber = this.state.pageNumber;
  //     let authHeader = getAuthHeaderValue();
  //     console.log("gid : " + this.state.groupInfo.gid);
  //     await fetch("http://localhost:8080/flocks/" + this.state.groupInfo.gid + "/feed/" + pageNumber, {
  //         method: "GET",
  //         headers: {
  //             Authorization: authHeader
  //         }
  //     })
  //         .then(response => response.json())
  //         .then(responseJson => {
  //             console.log(responseJson);
  //             this.setState({
  //                 posts: this.state.posts.concat(responseJson),
  //                 initLoadingPosts: false,
  //                 pageNumber: pageNumber + 1
  //             });
  //         });
  // }

    // redirectToPost = pid => {
    //     this.props.history.push("/posts/" + pid )
    // }

  render() {
    const eventInfo = this.state.eventInfo;
    console.log(eventInfo);
    const loadMore = !this.state.initLoadingPosts ? (
          <div style={{
              textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px',
          }}
          >
              <Button onClick={this.loadPosts}>Load More</Button>
          </div>
    ) : null;

    // if (this.state.initLoading) {
    //   return (
    //       <h5>loading...</h5>
    //   )
    // }
    // else {
    //     return (
    //         <GroupInfo
    //             name={this.state.groupInfo.name}
    //             description={this.state.groupInfo.description}
    //         />,

    //         <List
    //           itemLayout="horizontal"
    //           size="large"
    //           loading={this.state.initLoadingPosts}
    //           loadMore={loadMore}
    //           dataSource={this.state.posts}
    //           renderItem={item => <FeedPostComponent item={item} redirect={this.redirectToPost} />}
    //     />
    //     );
    // }
    return (
      <GroupInfo
                name={this.state.eventInfo.name}
                description={this.state.eventInfo.description}
            />
      );
  }
}

export default IndividualEventContainer;