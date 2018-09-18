import React from "react";
import { Button } from "antd";

export default function(pm) {
  return [
    {
      title: "Name",
      dataIndex: "manufacturerName",
      rowKey: "manufacturerName",
      key: "manufacturerName",
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
            <Button icon="edit" onClick={() => pm.toggleModal(row, "edit")} />

            <Button
              type="danger"
              icon="delete"
              onClick={() => pm.onDelete(row.manufacturerId)}
              className="mrgnLft5"
            />
          </span>
        );
      }
    }
  ];
}
