import React, { Component } from "react";
import { Row, Col } from "antd";
import EditProfileContainer from "../containers/User/EditProfileContainer";
import OasysLogo from "../components/OasysLogo";


import students from "../images/students-signup-image-cropped.jpg";

class EditProfile extends Component {
  render() {
    return (
      <div>
        <img
          //src={students}
          style={{
            minHeight: "100%",
            minWidth: 1024,
            width: "100%",
            height: "auto",
            position: "fixed",
            top: 0,
            left: 0
          }}
          alt="Students walking around"
        />
        <Row
          type="flex"
          align="middle"
          style={{
            position: "absolute",
            margin: "auto",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
          }}
        >
          <Col
            type="flex"
            align="middle"
            xs={{ span: 14, offset: 5 }}
            s={{ span: 12, offset: 6 }}
            md={{ span: 10, offset: 7 }}
            lg={{ span: 8, offset: 8 }}
            xl={{ span: 6, offset: 9 }}
          >
            <OasysLogo />
            <div
              style={{
                borderRadius: 5,
                backgroundColor: "white",
                paddingTop: 30,
                paddingBottom: 1
              }}
            >
              <EditProfileContainer />
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EditProfile;

