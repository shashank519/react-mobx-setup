import React from "react";
import { observer } from "mobx-react";
import { Layout } from "antd";

import "./MainLayout.scss";
import Header from "./../../commons/header/Header";
import Sider from "./../../commons/sider/Sider";
import Footer from "./../../commons/footer/Footer";

const { Content } = Layout;

const MainLayout = ({ children }) => {
  return (
    <Layout className="dashboard">
      <Sider />
      <Layout>
        <Header />
        <Content
          style={{
            margin: "24px 16px",
            padding: 24,
            background: "#fff",
            height: "100vh"
          }}
        >
          {children}
        </Content>
        <Footer />
      </Layout>
    </Layout>
  );
};

export default observer(MainLayout);
