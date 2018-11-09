import React, { Component } from "react";
import { Layout } from "antd";
import UserHeader from "../../containers/User/UserHeader";
import UserSideBar from "../../containers/User/UserSideBar";
import UserHomeContent from "../../containers/User/UserHomeContent";

class UserHomePage extends Component {
  render() {
    return (
      <Layout>
        <UserHeader />
        <Layout>
          <UserSideBar />
          <UserHomeContent />
        </Layout>
      </Layout>
    );
  }
}

export default UserHomePage;
