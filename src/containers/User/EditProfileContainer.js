import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Form, Input, Tooltip, Icon, Button, Select, Upload } from "antd";
import {getAuthHeaderValue, login} from '../../utils/AuthUtils'
import { postJson } from '../../utils/RestUtils'

const FormItem = Form.Item;
const Option = Select.Option;

class EditProfileContainer extends Component {
  constructor() {
    super();
    this.state = {
      confirmDirty: false,
      autoCompleteResult: [],
      name: "",
      //majors: "",
      interests: "",
      gradYear: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFieldsAndScroll( async (err, values) => {
      if (!err) {
        // const username = values.email.substr(0, values.email.indexOf("@"));
        // // Add the user
        const photoPath = await this.state.photoPathPromise;

        // Add interests and studies to new user
        if(values.name != null)
          postJson("/current_user/name", values.name);
        if (values.interests != null)
          postJson("/current_user/interests", values.interests);
        if (values.majors != null)
          postJson("/current_user/majors", values.majors);


        //Add session so that instead of general home page, it actually renders to user home
        this.props.history.push("/home");
      }
    });
  };

  upload = data => {
    let form = new FormData();
    form.append('file', data.file, data.file.name);
    let result = postJson("/image", form, null, false);
    this.setState({photoPathPromise: result});
  };

  handleConfirmBlur = e => {
    const value = e.target.value;
    this.setState({ confirmDirty: this.state.confirmDirty || !!value });
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

      fetch("http://localhost:8080/current_user/", {
        method: "GET",
        headers: {
          Authorization: getAuthHeaderValue()
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson != null) {
            this.setState({
              name: responseJson.name,
              interests: responseJson.interests,
              gradYear: responseJson.graduationYear
            });
          }
        });

      fetch("http://localhost:8080/current_user/majors", {
        method: "GET",
        headers: {
          Authorization: getAuthHeaderValue()
        }
      })
        .then(response => response.json())
        .then(responseJson => {
          if (responseJson != null) {
            var studies = [];
            responseJson.map((major, _idx) => {
              let name = major.name;
              studies.push(name);
            });
          this.setState({ majors: studies });
          }
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
        Current Name: {this.state.name}
        <FormItem {...formItemLayout}>
          {getFieldDecorator("name", {})(<Input placeholder="Edit Full Name" />)}
        </FormItem>
  
        Current Studies: {this.state.majors}
        <FormItem {...formItemLayout}>
          {getFieldDecorator("majors", {/*TODO: rules :)*/})
          (<Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="Edit Studies"
          >
            {this.state.studies}
          </Select>)}
        </FormItem>
        

        Current Graduation Year: {this.state.gradYear}
        <FormItem {...formItemLayout}>
          {getFieldDecorator("graduationYear", {})(<Input placeholder="Edit Graduation Year" />)}
        </FormItem>

        Current Interests: {this.state.interests}
        <FormItem {...formItemLayout}>
          {getFieldDecorator("interests", {/*TODO: rules :)*/})
          (<Select
              mode="tags"
              style={{ width: '100%' }}
              placeholder="Edit Interests"
          >
            {this.state.interests}
          </Select>)}
        </FormItem>

        <FormItem
          {...formItemLayout}
        >
          {getFieldDecorator('upload', {
            label: "Profile Image",
            valuePropName: 'imageUrl',
          })(
            <Upload
              name="photo"
              action="http://localhost:8080/image"
              customRequest={this.upload}
              headers={{
                Authorization: getAuthHeaderValue(),

              }}
              listType="picture"
              multiple={false}
              withCredentials={false}
            >
              <Button>
                <Icon type="upload" /> Change Profile Photo
              </Button>
            </Upload>
          )}
        </FormItem>
        
        <FormItem>
          <Button type="primary" htmlType="submit">
            Submit Changes
          </Button>
        </FormItem>
      </Form>
    );
  }
}

const WrappedEditProfileContainer = Form.create()(EditProfileContainer);

export default withRouter(WrappedEditProfileContainer);