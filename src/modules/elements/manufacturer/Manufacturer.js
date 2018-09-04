import React from "react";
import { withRouter } from "react-router";
import { observer } from "mobx-react";
import { Table, Button } from "antd";

import ActionModal from "./ActionModal";
import pm from "./ManufacturerPM";

import "./Manufacturer.scss";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    description: 32,
    createdAt: "10 Downing Street",
    updatedAt: "10 Downing Street"
  },
  {
    key: "2",
    name: "John",
    description: 42,
    createdAt: "10 Downing Street",
    updatedAt: "10 Downing Street"
  }
];

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name"
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description"
  },
  {
    title: "Action",
    dataIndex: "actions",
    key: "actions",
    render: (info, row) => {
      return (
        <span>
          <Button type="primary" onClick={() => pm.toggleModal(row)}>
            Edit
          </Button>
          <Button type="primary" className="mrgnLft5">
            Delete
          </Button>
        </span>
      );
    }
  }
];

const Manufacturer = () => {
  return (
    <div className="manufacturer">
      <h1>Manufacturer page</h1>
      <Table dataSource={dataSource} columns={columns} />
      <ActionModal />
    </div>
  );
};

export default withRouter(observer(Manufacturer));
