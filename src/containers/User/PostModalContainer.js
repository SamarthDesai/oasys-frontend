import React, {Component} from "react";
import {Modal, Button, Form, Select, Radio, Input} from 'antd';
import {postJson} from "../../utils/RestUtils";
import {getAuthHeaderValue} from "../../utils/AuthUtils";
import {withRouter} from "react-router-dom";

const {TextArea} = Input;
const FormItem = Form.Item;
const Option = Select.Option;

class PostModalContainer extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    // Instead fetch groups person is admin of
    console.log(getAuthHeaderValue());
    fetch("http://localhost:8080/current_user/flocks", {
      method: 'GET',
      headers: {
        Authorization: getAuthHeaderValue()
      }
    }).then((response) => response.json())
      .then((responseJson) => {
        if (responseJson != null) {
          console.log(responseJson);
          this.setState({
            flocks: responseJson.map((flock, _idx) => {
              console.log(flock);
              return <Option value={flock.gid}>{flock.name}</Option>
            })
          })
        }
      })
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      if (!err) {
        await postJson("/posts", {
          gid: values.flock,
          kind: values.kind,
          body: values.body
        });
      }
    });
    this.setState({
      visible: false,
    });
  };


  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render() {
    const {getFieldDecorator} = this.props.form;
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          New post
        </Button>
        <Modal
          title="New Post"
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
        >
          <Form layout="vertical">
            <FormItem
              label="Flock"
              hasFeedback
            >
              {getFieldDecorator('flock', {
                rules: [
                  {required: true, message: 'Select group to post in'},
                ],
              })(
                <Select
                  showSearch
                  style={{width: 200}}
                  // placeholder="Select a person"
                  optionFilterProp="children"
                  filterOption={(input, option) =>
                    option.props.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                >
                  {this.state.flocks}
                </Select>
              )}
            </FormItem>
            <FormItem label="Body">
              {getFieldDecorator('body')(<TextArea rows={4}/>)}
            </FormItem>
            <FormItem className="collection-create-form_last-form-item">
              {getFieldDecorator('kind', {
                initialValue: 'public',
              })(
                <Radio.Group>
                  <Radio value="public">Public</Radio>
                  <Radio value="private">Private</Radio>
                </Radio.Group>
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
const WrappedPostModalContainer = Form.create()(PostModalContainer);
export default withRouter(WrappedPostModalContainer);