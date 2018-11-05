import React, { Component } from "react";
import { Layout, Icon, Button, Row, Col } from "antd";
import ScrollAnimation from "react-animate-on-scroll";
import "animate.css/animate.min.css";
import LoginForm from "./containers/LoginForm";

import students from "./images/students_homepage_image.jpg";
import whiteLogo from "./images/oasys-logo-white-final-cropped-tight.png";
import blueLogo from "./images/oasys-logo-blue-final-cropped-tight.png";

const { Header, Content, Footer } = Layout;

class App extends Component {
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

  handleSignUp = e => {
    this.props.history.push("/signup");
  };

  componentDidMount() {
    window.addEventListener("scroll", this.listenScrollEvent);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.listenScrollEvent);
  }
  //     isAuthenticated: false,
  //     isAuthenticating: true
  //   };
  // }
  //
  // // Set authenticated state based on whether or not a user has a session (which occurs if a user is logged in)
  // async componentDidMount() {
  //   try {
  //     if (await Auth.currentSession()) {
  //       this.userHasAuthenticated(true);
  //     }
  //   } catch (e) {
  //     if (e !== "No current user") {
  //       alert(e);
  //     }
  //   }
  //
  //   this.setState({ isAuthenticating: false });
  // }
  //
  // userHasAuthenticated = authenticated => {
  //   this.setState({ isAuthenticated: authenticated });
  // };
  //
  // // Handle logging out of user
  // handleLogout = async event => {
  //   await Auth.signOut();
  //
  //   this.userHasAuthenticated(false);
  //
  //   this.props.history.push("/login");
  // };

  render() {
    // Pass isAuthenticated state and userHasAuthenticated function as children props to each Route
    // const childProps = {
    //   isAuthenticated: this.state.isAuthenticated,
    //   userHasAuthenticated: this.userHasAuthenticated
    // };

    return (
      // !this.state.isAuthenticating && (
      <Layout>
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
              <img
                src={this.state.logo}
                style={{
                  width: "auto",
                  height: "48px"
                }}
                alt="oasys"
              />
            </Col>
            <Col>
              <LoginForm />
            </Col>
          </Row>
        </Header>
        <Content>
          <img
            src={students}
            style={{ width: "100%", height: "auto", position: "relative" }}
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
            <Col type="flex" align="middle" span={12} offset={6}>
              <h1
                style={{
                  color: "white"
                }}
              >
                College is an experience. Take full advantage.
              </h1>
              <Button type="primary" size="large" onClick={this.handleSignUp}>
                Get Started
              </Button>
            </Col>
          </Row>
          <Row>
            <Col type="flex" align="middle">
              <h1
                style={{
                  color: "#3A9CF2",
                  fontSize: "32px"
                }}
              >
                {" "}
                Oasys connects you with your school community{" "}
              </h1>
              <Row type="flex" justify="space-around" gutter={16}>
                <Col type="flex" align="middle">
                  <ScrollAnimation animateIn="fadeIn">
                    <Icon
                      type="compass"
                      theme="twoTone"
                      style={{ fontSize: "32px" }}
                    />
                    <p>
                      {" "}
                      Discover the people, groups, and events at your school{" "}
                    </p>
                  </ScrollAnimation>
                </Col>
                <Col type="flex" align="middle">
                  <ScrollAnimation animateIn="fadeIn" delay={500}>
                    <Icon
                      type="pushpin"
                      theme="twoTone"
                      style={{ fontSize: "32px" }}
                    />
                    <p> Keep track of everything interesting at school </p>
                  </ScrollAnimation>
                </Col>
                <Col type="flex" align="middle">
                  <ScrollAnimation animateIn="fadeIn" delay={1000}>
                    <Icon
                      type="message"
                      theme="twoTone"
                      style={{ fontSize: "32px" }}
                    />
                    <p>
                      {" "}
                      Effectively communicate with your classmates and groups{" "}
                    </p>
                  </ScrollAnimation>
                </Col>
              </Row>
            </Col>
          </Row>
        </Content>
        <Footer>
          <Row type="flex" align="middle">
            <Col type="flex" align="middle">
              <p> Oasys ©2018 Created by 316 Squad </p>
            </Col>
          </Row>
        </Footer>
      </Layout>
      // )
    );
  }
}

export default App;
