import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Layout, Row, Col } from "antd";
import LoginForm from "./LoginForm";

import whiteLogo from "../../images/oasys-logo-white-final-cropped-tight.png";
import blueLogo from "../../images/oasys-logo-blue-final-cropped-tight.png";

const { Header } = Layout;

class GeneralHeader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      backgroundColor: "transparent",
      logo: whiteLogo
    };
  }

  listenScrollEvent = e => {
    if (window.scrollY > 50) {
      this.setState({ backgroundColor: "white" });
      this.setState({ logo: blueLogo });
    } else {
      this.setState({ backgroundColor: "transparent" });
      this.setState({ logo: whiteLogo });
    }
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent);
  }

  render() {
    return (
      <Header
        style={{
          position: "fixed",
          zIndex: 1,
          width: "100%",
          backgroundColor: this.state.backgroundColor,
          WebkitTransition: "all 500ms linear",
          transition: "all 500ms linear"
        }}
      >
        <Row type="flex" justify="space-between" align="middle">
          <Col>
            <Link to="/">
              <img
                src={this.state.logo}
                style={{
                  width: "auto",
                  height: "48px"
                }}
                alt="oasys"
              />
            </Link>
          </Col>
          <Col>
            <LoginForm />
          </Col>
        </Row>
      </Header>
    );
  }
}

export default GeneralHeader;
