import React from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { Button } from "antd";
import { presenter } from "./../../../../../hoc/Presenter";
import Presenter from "./indexPM";
import TableContainer from "./../../../../../components/TableContainer";
import ActionModal from "./ActionModal";
import columns from "./Columns";

const Unit = props => {
  return (
    <div className="brand">
      <div className="brand-head">
        <h2 className="display-inline">Unit</h2>
      </div>
      <TableContainer
        tableProps={{
          dataSource:
            (toJS(props.pm.unitsList) && toJS(props.pm.unitsList)) || [],
          columns: columns(props.pm),
          rowKey: record => record.unitId,
          loading: props.pm.isFetching,
          bordered: true
        }}
        filterByFields={["title"]}
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

export default observer(presenter(Presenter, Unit));
