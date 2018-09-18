import React from "react";
import { Button } from "antd";

export default function(pm) {
  return [
    {
      title: "Batch Numbere",
      dataIndex: "batchNumbere",
      rowKey: "batchNumbere",
      key: "batchNumbere",
      width: 250
    },
    {
      title: "Product",
      dataIndex: "product.productName",
      rowKey: "product.productName",
      key: "product.productName"
    },
    {
      title: "Price",
      dataIndex: "Price",
      rowKey: "Price",
      key: "Price"
    },
    {
      title: "MRP",
      dataIndex: "mrp",
      rowKey: "mrp",
      key: "mrp"
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
            <Button icon="edit" onClick={() => pm.toggleModal(row, "edit")} />
            <Button
              type="danger"
              icon="delete"
              onClick={() => pm.onDelete(row.brandId)}
              className="mrgnLft5"
            />
          </span>
        );
      }
    }
  ];
}
