import React from "react";
import { Button } from "antd";

export default function(pm) {
  return [
    {
      title: "Name",
      dataIndex: "productName",
      rowKey: "productName",
      key: "productName"
    },
    {
      title: "HSN Code",
      dataIndex: "hsnCode",
      rowKey: "hsnCode",
      key: "hsnCode"
    },
    {
      title: "Product Code",
      dataIndex: "productCode",
      rowKey: "productCode",
      key: "productCode"
    },
    {
      title: "Product Master Name",
      dataIndex: "productMaster.productMasterName",
      rowKey: "productMaster.productMasterName",
      key: "productMaster.productMasterName"
    },
    {
      title: "Category",
      dataIndex: "productMaster.category.categoryName",
      rowKey: "productMaster.category.categoryName",
      key: "productMaster.category.categoryName"
    },
    {
      title: "Brand",
      dataIndex: "productMaster.brand.brandName",
      rowKey: "productMaster.brand.brandName",
      key: "productMaster.brand.brandName"
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
      render: (info, row) => {
        return (
          <span>
            <Button icon="edit" onClick={() => pm.toggleModal(row, "edit")} />
            <Button icon="delete" type="danger" className="mrgnLft5" />
          </span>
        );
      }
    }
  ];
}
