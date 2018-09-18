import React from "react";
import { observer } from "mobx-react";
import { Button } from "antd";
import { presenter } from "./../../../../../hoc/Presenter";
import ActionModal from "./ActionModal";
import Presenter from "./CategoryPM";
import columns from "./Columns";
import TableContainer from "./../../../../../components/TableContainer";

const Category = props => {
  return (
    <div className="category">
      <div className="category-head">
        <h2 className="display-inline">Category</h2>
      </div>
      <TableContainer
        tableProps={{
          dataSource: props.pm.categoryList && props.pm.categoryList.slice(),
          columns: columns(props.pm),
          rowKey: record => record.categoryId,
          loading: props.pm.isFetching,
          bordered: true
        }}
        filterByFields={["categoryName", "description"]}
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

export default observer(presenter(Presenter, Category));
