import React from "react";
import { withRouter } from "react-router";
import { observer } from "mobx-react";
import { Table, Button } from "antd";

import ActionModal from "./ActionModal";
import pm from "./ManufacturerPM";

import "./Manufacturer.scss";

const columns = [
  {
    title: "Name",
    dataIndex: "name",
    rowKey: "name",
    key: "name",
    width: 250
  },
  {
    title: "Description",
    dataIndex: "description",
    rowKey: "description",
    key: "description"
  },
  {
    title: "Action",
    dataIndex: "actions",
    rowKey: "actions",
    key: "actions",
    width: 250,
    render: (info, row) => {
      return (
        <span>
          <Button type="primary" onClick={() => pm.toggleModal(row, "edit")}>
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
      <div className="manufacturer-head">
        <h2 className="display-inline">Manufacturer</h2>
        <Button
          onClick={pm.toggleModal}
          className="display-inline float-right"
          type="primary"
          shape="circle"
          icon="plus"
        />
      </div>
      <Table
        dataSource={pm.manufacturarsList.slice()}
        columns={columns}
        rowKey={record => record.key}
      />
      <ActionModal wrappedComponentRef={pm.saveFormRef} />
    </div>
  );
};

export default withRouter(observer(Manufacturer));
