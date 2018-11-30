import React, { Component } from "react";
import { withCookies, Cookies } from "react-cookie";
import { withRouter } from "react-router-dom";
import { Form, Icon, Input, Button } from "antd";

const FormItem = Form.Item;

function hasErrors(fieldsError) {
  return Object.keys(fieldsError).some(field => fieldsError[field]);
}

class LoginForm extends Component {
  componentDidMount() {
    // To disabled submit button at the beginning.
    this.props.form.validateFields();
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log("Received values of form: ", values);
      }
    });
    const username = this.props.form.getFieldValue("email");
    const password = this.props.form.getFieldValue("password");
    console.log(username);
    console.log(password);
    //  var self = this;
    fetch("http://localhost:8080/oauth/token", {
      method: "POST",
      body: `username=${username}&password=${password}&grant_type=password`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "X-Requested-With": "XMLHttpRequest",
        // TODO (Ben): we really shouldn't expose these secrets client-side lol
        Authorization:
          "Basic " + Buffer.from("oasys:XY7kmzoNzl100").toString("base64")
      },
      mode: "cors"
    })
      .then(response => response.json())
      .then(function(responseJson) {
        //self.setState(responseJson);
        // self.props.access_token = responseJson;
        // Cookie is set automatically?
        console.log(responseJson);
        const cookies = new Cookies();
        const now = new Date();
        // expires_in is in seconds (I think) and getTime() is milliseconds
        const storeUntil = now.getTime() + responseJson.expires_in * 1000;
        const expiryDate = new Date(storeUntil);
        console.log(storeUntil);
        cookies.set("JSESSIONID", responseJson.access_token, {
          path: "/",
          expires: expiryDate
        });
      })
      .catch(error => {
        console.error(error);
      });
    this.props.history.push("/home");
  };

  render() {
    const {
      getFieldDecorator,
      getFieldsError,
      getFieldError,
      isFieldTouched
    } = this.props.form;

    // Only show error after a field is touched.
    const emailError = isFieldTouched("email") && getFieldError("email");
    const passwordError =
      isFieldTouched("password") && getFieldError("password");
    return (
      <Form layout="inline" onSubmit={this.handleSubmit}>
        <FormItem
          validateStatus={emailError ? "error" : ""}
          help={emailError || ""}
        >
          {getFieldDecorator("email", {
            rules: [
              { required: true, message: "Please input your Duke email!" }
            ]
          })(
            <Input
              prefix={<Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />}
              placeholder="Email"
            />
          )}
        </FormItem>
        <FormItem
          validateStatus={passwordError ? "error" : ""}
          help={passwordError || ""}
        >
          {getFieldDecorator("password", {
            rules: [{ required: true, message: "Please input your Password!" }]
          })(
            <Input
              prefix={<Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />}
              type="password"
              placeholder="Password"
            />
          )}
        </FormItem>
        <FormItem>
          <Button
            type="primary"
            htmlType="submit"
            disabled={hasErrors(getFieldsError())}
          >
            Log in
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedLoginForm = Form.create()(LoginForm);

export default withRouter(WrappedLoginForm);
