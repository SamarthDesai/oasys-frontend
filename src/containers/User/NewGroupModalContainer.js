import React, {Component} from "react";
import {Button, Form, Icon, Input, Modal, Select, Upload} from 'antd';
import {postJson} from "../../utils/RestUtils";
import {getAuthHeaderValue} from "../../utils/AuthUtils";
import {withRouter} from "react-router-dom";

const {TextArea} = Input;
const FormItem = Form.Item;
const Option = Select.Option;

class NewGroupModalContainer extends Component {
  constructor() {
    super();

    this.state = {
      visible: false
    };
  }

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
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll(async (err, values) => {
      const photoPath = await this.state.photoPathPromise;
      if (!err) {
        await postJson("/flocks", {
          name: values.name,
          description: values.description,
          photoPath: photoPath
        });

        if (values.tags != null)
          postJson("/flocks/name/" + values.name + "/interests", values.tags);

        this.props.history.push("/groups/" + values.name);
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
    return (
      <div>
        <Button type="primary" onClick={this.showModal} size="large" style={{ marginLeft: 16 }}>
          New Group
        </Button>
        <Modal
          title="New Group"
          visible={this.state.visible}
          onOk={this.handleSubmit}
          onCancel={this.handleCancel}
        >
          <Form layout="vertical">
            <FormItem {...formItemLayout}>
              {getFieldDecorator("name", {})(<Input placeholder="Group Name" />)}
            </FormItem>
            <FormItem {...formItemLayout}>
              {getFieldDecorator("tags", {/*TODO: rules :)*/})
              (<Select
                mode="tags"
                style={{ width: '100%' }}
                placeholder="Related Interests"
              >
                {this.state.interests}
              </Select>)}
            </FormItem>
            <FormItem
              {...formItemLayout}
            >
              {getFieldDecorator('upload', {
                label: "Group Image",
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
                    <Icon type="upload" /> Select Group Photo
                  </Button>
                </Upload>
              )}
            </FormItem>
            <FormItem label="Description">
              {getFieldDecorator('description')(<TextArea rows={4}/>)}
            </FormItem>
          </Form>
        </Modal>
      </div>
    );
  }
}
const WrappedNewGroupModalContainer = Form.create()(NewGroupModalContainer);
export default withRouter(WrappedNewGroupModalContainer);