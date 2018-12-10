import React, {Component} from "react";
import {Modal, Button, Form, Select, Radio, Input} from 'antd';
import {postJson} from "../../utils/RestUtils";
import {getAuthHeaderValue} from "../../utils/AuthUtils";
import {withRouter} from "react-router-dom";

const {TextArea} = Input;
const FormItem = Form.Item;
const Option = Select.Option;

class GroupListingContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      visible: false,
      groupName: this.props.match.params.groupName
    };

    console.log(this.props.match.params.groupName);
  }

  componentDidMount() {
    fetch("http://localhost:8080/flocks/name/" + this.state.groupName, {
      method: "GET"
    }).then(response => response.json())
      .then(responseJson => {
        this.setState( { groupInfo: responseJson })
      })
  }

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        
      </div>
    );
  }
}

const WrappedGroupListingContainer = Form.create()(GroupListingContainer);
export default withRouter(WrappedGroupListingContainer);