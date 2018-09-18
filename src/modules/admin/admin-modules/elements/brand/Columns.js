import React from "react";
import { Button } from "antd";

export default function(pm) {
  return [
    {
      title: "Name",
      dataIndex: "brandName",
      rowKey: "brandName",
      key: "brandName",
      width: 250
    },
    {
      title: "Manufacturer",
      dataIndex: "manufacturer.manufacturerName",
      rowKey: "manufacturer.manufacturerName",
      key: "manufacturer.manufacturerName"
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
