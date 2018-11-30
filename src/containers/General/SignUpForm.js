import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Tooltip, Icon, Button, Select } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

class SignUpForm extends Component {
  constructor() {
    super();
    this.state = {
      confirmDirty: false,
      autoCompleteResult: []
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll( async (err, values) => {
      if (!err) {
        const username = values.email.substr(0, values.email.indexOf("@"));
        console.log("Received values of form: ", values);
        await fetch("http://localhost:8080/persons", {
            method: 'POST',
            headers: {
              "Content-Type": "application/json",
              "X-Requested-With": "XMLHttpRequest"
            },
            mode: 'cors',
            body: JSON.stringify({
              name: values.name,
              graduationYear: values.graduationYear,
              email: values.email,
              password: values.password,
              username: username
            })
        }).then(response => response.json())
          .then(responseJson => {
            if (responseJson.name == null) {
              this.props.history.push("/signup");
            }
          });

        await fetch("http://localhost:8080/persons/" + username + "/interests", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          mode: 'cors',
          body: JSON.stringify(values.interests)
        });

        await fetch("http://localhost:8080/persons/" + username + "/majors", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          mode: 'cors',
          body: JSON.stringify(values.majors)
        });

        await fetch("http://localhost:8080/persons/" + username + "/minors", {
          method: 'POST',
          headers: {
            "Content-Type": "application/json",
            "X-Requested-With": "XMLHttpRequest"
          },
          mode: 'cors',
          body: JSON.stringify(values.minors)
        }).then(response => { console.log(response.json())} );

        //Add session so that instead of general home page, it actually renders to user home
        this.props.history.push("/");
      }
    });
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
  };

  compareToFirstPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && value !== form.getFieldValue("password")) {
      callback("Two passwords that you enter is inconsistent!");
    } else {
      callback();
    }
  };

  validateToNextPassword = (rule, value, callback) => {
    const form = this.props.form;
    if (value && this.state.confirmDirty) {
      form.validateFields(["confirm"], { force: true });
    }
    callback();
  };

  componentDidMount() {
    fetch("http://localhost:8080/interest/all", {
      method: 'GET'
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({interests: responseJson.map((interest, idx) => {
            return <Option key={interest}>{interest}</Option>
          })})
      });

    fetch("http://localhost:8080/study/all", {
      method: 'GET'
    }).then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({studies: responseJson.map((study, idx) => {
            return <Option key={study}>{study}</Option>
          })})
      });
  }

  render() {
    const { getFieldDecorator } = this.props.form;

    const formItemLayout = {
      wrapperCol: {
        xs: {span: 12, offset: 0},
        sm: {span: 20, offset: 2}
      }
    };
    return (
      <Form onSubmit={this.handleSubmit} style = {{}}>
        <FormItem {...formItemLayout}>
          {getFieldDecorator("name", {})(<Input placeholder="Full Name" />)}
        </FormItem>
        <FormItem {...formItemLayout}>
          {getFieldDecorator("email", {
            rules: [
              {
                type: "email",
                message: "The input is not valid E-mail!"
              },
              {
                required: true,
                message: "Please input your E-mail!"
              }
            ]
          })(<Input placeholder="E-mail" />)}
        </FormItem>
        <FormItem {...formItemLayout}>
          {getFieldDecorator("password", {
            rules: [
              {
                required: true,
                message: "Please input your password!"
              },
              {
                validator: this.validateToNextPassword
              }
            ]
          })(<Input type="password" placeholder="Password" />)}
        </FormItem>
        <FormItem {...formItemLayout}>
          {getFieldDecorator("confirm", {
            rules: [
              {
                required: true,
                message: "Please confirm your password!"
              },
              {
                validator: this.compareToFirstPassword
              }
            ]
          })(
              <Input
                  type="password"
                  onBlur={this.handleConfirmBlur}
                  placeholder="Confirm Password"
              />
          )}
        </FormItem>
        <FormItem {...formItemLayout}>
          {getFieldDecorator("majors", {/*TODO: rules :)*/})
          (<Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Majors"
          >
            {this.state.studies}
          </Select>)}
        </FormItem>
        <FormItem {...formItemLayout}>
          {getFieldDecorator("minors", {/*TODO: rules :)*/})
          (<Select
              mode="tags"
              style={{ width: '100%' }}
              placeholder="Minors"
            >
              {this.state.studies}
            </Select>)}
        </FormItem>
        <FormItem {...formItemLayout}>
          {getFieldDecorator("graduationYear", {})(<Input placeholder="Graduation Year" />)}
        </FormItem>
        <FormItem {...formItemLayout}>
          {getFieldDecorator("interests", {/*TODO: rules :)*/})
          (<Select
              mode="tags"
              style={{ width: '100%' }}
              placeholder="Interests"
          >
            {this.state.interests}
          </Select>)}
        </FormItem>
        <FormItem>
          <Button type="primary" htmlType="submit">
            Register
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedSignUpForm = Form.create()(SignUpForm);

export default withRouter(WrappedSignUpForm);