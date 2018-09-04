import React from "react";
import { observer } from "mobx-react";
import { Layout, Icon, Menu } from "antd";
import { Link } from "react-router-dom";

import "./Sider.scss";
import store from "./../../Store";

const { Sider } = Layout;
const SubMenu = Menu.SubMenu;

const MainSider = () => {
  return (
    <Sider trigger={null} collapsed={store.collapsed}>
      <div className="logo" />
      <Menu theme="dark" mode="inline">
        <Menu.Item key="1">
          <Icon type="pie-chart" />
          <span>
            <Link to="/dashboard">Dashboard</Link>
          </span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="user" />
              <span>Elements</span>
            </span>
          }
        >
          <Menu.Item key="3">
            <Link to="/elements/products">Product</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="/elements/category">Category</Link>
          </Menu.Item>
          <Menu.Item key="5">
            <Link to="/elements/manufacturer">Manufacturer</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="team" />
              <span>Settings</span>
            </span>
          }
        >
          <Menu.Item key="6">
            <Link to="/settings/change-password">Change Password</Link>
          </Menu.Item>
          <Menu.Item key="8">
            <Link to="/settings/roles">Roles</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default observer(MainSider);
