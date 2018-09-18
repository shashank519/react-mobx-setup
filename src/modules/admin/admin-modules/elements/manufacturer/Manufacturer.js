import React from "react";
import { observer } from "mobx-react";
import { Button } from "antd";
import { presenter } from "./../../../../../hoc/Presenter";
import ActionModal from "./ActionModal";
import Presenter from "./ManufacturerPM";
import columns from "./Columns";
import TableContainer from "./../../../../../components/TableContainer";
import "./Manufacturer.scss";

const Manufacturer = props => {
  return (
    <div className="manufacturer">
      <div className="manufacturer-head">
        <h2 className="display-inline">Manufacturer</h2>
      </div>
      <TableContainer
        tableProps={{
          dataSource:
            props.pm.manufacturersList && props.pm.manufacturersList.slice(),
          columns: columns(props.pm),
          rowKey: record => record.manufacturerId,
          loading: props.pm.isFetching,
          bordered: true
        }}
        filterByFields={["manufacturerName", "description"]}
        extra={
          <Button
            onClick={props.pm.toggleModal}
            className="display-inline float-right"
            type="primary"
            shape="circle"
            icon="plus"
          />
        }
      />
      <ActionModal {...props.pm} />
    </div>
  );
};

export default observer(presenter(Presenter, Manufacturer));
