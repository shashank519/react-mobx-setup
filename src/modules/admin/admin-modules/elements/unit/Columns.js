import React from "react";
import { Button, Popconfirm } from "antd";

export default function(pm) {
  return [
    {
      title: "Unit Name",
      dataIndex: "title",
      rowKey: "title",
      key: "title",
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
              onConfirm={() => pm.onDelete(row.unitId)}
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
