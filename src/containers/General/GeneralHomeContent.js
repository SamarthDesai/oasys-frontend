import React from "react";
import { Layout } from "antd";
import GeneralHomeBegin from "../../components/GeneralHomeBegin";
import GeneralHomeInfo from "../../components/GeneralHomeInfo";

const { Content } = Layout;

export default () => (
  <Content>
    <GeneralHomeBegin />
    <GeneralHomeInfo />
  </Content>
);
