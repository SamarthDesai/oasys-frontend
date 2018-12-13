import React, {Component} from "react";
import {Button, Form, Icon, Input, Modal, Select, Avatar} from 'antd';
import {postJson} from "../../utils/RestUtils";
import {getAuthHeaderValue} from "../../utils/AuthUtils";
import {withRouter} from "react-router-dom";
import { List } from "antd";
import ApproveButtonContainer from "./ApproveButtonContainer";
import DenyButtonContainer from "./DenyButtonContainer";
const {TextArea} = Input;
const FormItem = Form.Item;
const Option = Select.Option;

class MemberRequestsModalContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      groupId: this.props.gid,
      isAdmin: false,
    };
  }

  approve = async  (uid) => {
    console.log("APPROVE!!!!");
    await postJson("/flocks/" + this.state.groupId + "/members/" + uid);
    this.loadItems();
  };

  deny = async (uid) => {
    await fetch("http://localhost:8080/flocks/" + this.state.groupId + "/requests/" + uid, {
      method: 'DELETE',
      headers: { Authorization: getAuthHeaderValue() }
    });
    this.loadItems();
  };

  loadItems = () => {
    fetch("http://localhost:8080/flocks/" + this.state.groupId + "/requests", {
      method: 'GET',
      headers: { Authorization: getAuthHeaderValue() }
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({requestItems: responseJson.map((person, idx) => {
            return (<List.Item actions={[
              <ApproveButtonContainer approve={this.approve} uid={person.uid}/>,
              <DenyButtonContainer deny={this.deny} uid={person.uid}/>]}>
              <List.Item.Meta
                avatar={<Avatar src={person.photoPath} />}
                title={<a href="https://ant.design">{person.name}</a>}
              />
            </List.Item>)
          })})
      }).catch(error => {
        this.setState({ requestItems: [] });
    })
  }

  componentDidMount() {
    const gid = this.state.groupId;
    console.log("GID: " + gid);
    fetch("http://localhost:8080/is_admin/" + gid, {
      method: 'GET',
      headers: { Authorization: getAuthHeaderValue() }
    }).then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState({ isAdmin: true })
    }).catch(error => { console.log(error); this.setState( { isAdmin: false }) });
    this.loadItems();
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };


  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  upload = data => {
    let form = new FormData();
    form.append('file', data.file, data.file.name);
    let result = postJson("/image", form, null, false);
    this.setState({photoPathPromise: result});
  };

  render() {
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      wrapperCol: {
        xs: {span: 12, offset: 0},
        sm: {span: 20, offset: 2}
      }
    };
    console.log(this.state.isAdmin);
    return this.state.isAdmin ? (
      <div>
        <Button type="primary" onClick={this.showModal} size="large" style={{ marginLeft: 16 }}>
          Join Requests
        </Button>
        <Modal
          title="Join Requests"
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
        >
          <List
            itemLayout="horizontal"
            dataSource={this.state.requestItems}
            renderItem={item => item}
          >
          </List>
        </Modal>
      </div>
    ) : null;
  }
}
const WrappedMemberRequestsModalContainer = Form.create()(MemberRequestsModalContainer);
export default withRouter(WrappedMemberRequestsModalContainer);