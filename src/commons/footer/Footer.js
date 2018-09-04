import React from "react";
import { observer } from "mobx-react";
import { Layout } from "antd";

const { Footer } = Layout;

const MainFooter = () => {
  return (
    <Footer style={{ textAlign: "center" }}>
      Crazy Coders ©2018 Created by Crazy Coders
    </Footer>
  );
};

export default observer(MainFooter);
