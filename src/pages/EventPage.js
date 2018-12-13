import React, { Component } from "react";
import { Row, Col } from "antd";
import IndividualEventContainer from "../containers/User/IndividualEventContainer"
import OasysLogo from "../components/OasysLogo";

class EventPage extends Component {
  constructor(props) {
    super(props);

    console.log(this.props.match.params.eid);
  }

  render() {
    return (
      <div>
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
            <div
              style={{
                borderRadius: 5,
                backgroundColor: "white",
                paddingTop: 30,
                paddingBottom: 1
              }}
            >
              <IndividualEventContainer name={this.props.match.params.eid}/>

            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default EventPage;