import React from "react";
import { observer } from "mobx-react";
import { Layout, Icon } from "antd";

import store from "./../../Store";

import "./Header.scss";

const { Header } = Layout;

const MainHeader = () => {
  return (
    <Header className="header">
      <Icon
        className="trigger"
        type={store.collapsed ? "menu-unfold" : "menu-fold"}
        onClick={store.toggle}
      />
    </Header>
  );
};

export default observer(MainHeader);
