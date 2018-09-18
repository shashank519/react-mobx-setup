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
            <Link to="/admin/dashboard">Dashboard</Link>
          </span>
        </Menu.Item>
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="book" />
              <span>Procurement</span>
            </span>
          }
        >
          <Menu.Item key="3">
            <Icon type="shop" theme="outlined" />
            <span>
              <Link to="/admin/elements/products-master">Product Master</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="shop" theme="outlined" />
            <span>
              <Link to="/admin/elements/products">Product</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="5">
            <Icon type="bars" theme="outlined" />
            <span>
              <Link to="/admin/elements/category">Category</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="6">
            <Icon type="tool" theme="outlined" />
            <span>
              <Link to="/admin/elements/manufacturer">Manufacturer</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="7">
            <Icon type="trademark" theme="outlined" />
            <span>
              <Link to="/admin/elements/brand">Brand</Link>
            </span>
          </Menu.Item>
          <Menu.Item key="10">
            <Icon type="trademark" theme="outlined" />
            <span>
              <Link to="/admin/elements/unit">Units</Link>
            </span>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="setting" />
              <span>Purchase Order</span>
            </span>
          }
        >
          <Menu.Item key="8">
            <Link to="/admin/settings/change-password">Change Password</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key="sub3"
          title={
            <span>
              <Icon type="setting" />
              <span>Settings</span>
            </span>
          }
        >
          <Menu.Item key="8">
            <Link to="/admin/settings/change-password">Change Password</Link>
          </Menu.Item>
          <Menu.Item key="9">
            <Link to="/admin/settings/roles">Roles</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
};

export default observer(MainSider);
