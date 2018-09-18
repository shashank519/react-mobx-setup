import React from "react";
import { observer } from "mobx-react";
import { Button } from "antd";
import { presenter } from "./../../../../../hoc/Presenter";
import ActionModal from "./ActionModal";
import Presenter from "./ProductPM";
import columns from "./Columns";
import TableContainer from "./../../../../../components/TableContainer";

const Products = props => {
  return (
    <div className="product">
      <div className="product-head">
        <h2 className="display-inline">Products</h2>
      </div>
      <TableContainer
        tableProps={{
          dataSource: props.pm.productsList && props.pm.productsList.slice(),
          columns: columns(props.pm),
          rowKey: record => record.productId,
          bordered: true,
          loading: props.pm.isFetching
        }}
        filterByFields={["name", "description"]}
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

export default observer(presenter(Presenter, Products));
