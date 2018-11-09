import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Select, Input, Tooltip, Icon, Button } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class UserInfoForm extends Component {
  state = {
    confirmDirty: false,
    autoCompleteResult: []
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
        //Add session so that instead of general home page, it actually renders to user home
        this.props.history.push("/home");
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      wrapperCol: {
        xs: { span: 12, offset: 0 },
        sm: { span: 20, offset: 2 }
      }
    };

    return (
      <Form onSubmit={this.handleSubmit}>
        <FormItem {...formItemLayout}>
          {getFieldDecorator("nickname", {
            rules: [
              {
                required: true,
                message: "Please input your nickname!",
                whitespace: true
              }
            ]
          })(<Input placeholder="Nickname" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Select[multiple]">
          {getFieldDecorator("select-multiple", {
            rules: [
              {
                required: true,
                message: "Please select your favourite colors!",
                type: "array"
              }
            ]
          })(
            <Select
              mode="multiple"
              placeholder="Please select favourite colors"
            >
              <Option value="red">Red</Option>
              <Option value="green">Green</Option>
              <Option value="blue">Blue</Option>
            </Select>
          )}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            I'm Ready!
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedUserInfoForm = Form.create()(UserInfoForm);

export default withRouter(WrappedUserInfoForm);
