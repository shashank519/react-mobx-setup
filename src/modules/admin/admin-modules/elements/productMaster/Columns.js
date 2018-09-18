import React from "react";
import { Button, Popconfirm } from "antd";

export default function(pm) {
  return [
    {
      title: "ProductMasterName",
      dataIndex: "productMasterName",
      rowKey: "productMasterName",
      key: "productMasterName",
      width: 250
    },
    {
      title: "Brand",
      dataIndex: "brand.brandName",
      rowKey: "brand.brandName",
      key: "brand.brandName",
      width: 250
    },
    {
      title: "Category",
      dataIndex: "category.categoryName",
      rowKey: "category.categoryName",
      key: "category.categoryName",
      width: 250
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

            <Popconfirm
              title="Are you sure delete?"
              onConfirm={() => pm.removeProductMaster(row)}
              okText="Yes"
              cancelText="No"
            >
              <Button icon="delete" type="danger" className="mrgnLft5" />
            </Popconfirm>
          </span>
        );
      }
    }
  ];
}
