import React, { Component } from "react";
import { Layout } from "antd";
import GeneralHeaderContainer from "../../containers/General/GeneralHeaderContainer";
import GeneralHomeContent from "../../containers/General/GeneralHomeContent";
import GeneralFooter from "../../components/GeneralFooter";

class GeneralHomePage extends Component {
  render() {
    return (
      <Layout>
        <GeneralHeaderContainer childProps={this.props.childProps}/>
        <GeneralHomeContent />
        <GeneralFooter />
      </Layout>
    );
  }
}

export default GeneralHomePage;
