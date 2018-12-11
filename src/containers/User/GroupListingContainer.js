import React, {Component} from "react";
import {Modal, Button, Form, Select, Radio, Input, List} from 'antd';
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
      //groupName: this.props.match.params.groupName
    };

    //console.log(this.props.match.params.groupName);
  }

  componentDidMount() {
    let authHeader = getAuthHeaderValue();
    fetch("http://localhost:8080/flocks/name/NeuroCare" , {
      method: 'GET',
      headers: {
                Authorization: authHeader
            }
    }).then(response => response.json())
      .then(responseJson => {
        console.log(responseJson);
        this.setState( {'groupInfo': responseJson })
      })

  }

  render() {
    const groupInfo = this.state.groupInfo;
    console.log(groupInfo);
    return (
      
      <div>
        
      </div>
    );
  }
}

export default GroupListingContainer;