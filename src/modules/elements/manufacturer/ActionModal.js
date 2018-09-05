import React from "react";
import { observer } from "mobx-react";
import { Modal, Form, Input, Button } from "antd";
import pm from "./ManufacturerPM";

const FormItem = Form.Item;
const { TextArea } = Input;

const ActionModal = props => {
  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 8 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 16 } }
  };
  const tailFormItemLayout = {
    wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }
  };

  return (
    <Modal
      title="Basic Modal"
      visible={pm.isModalVisible}
      onCancel={pm.toggleModal}
      footer={null}
    >
      <Form onSubmit={e => pm.submitHandle(e, props.form)}>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator("name", {
            rules: [
              {
                required: true,
                message: "Please input your name!",
                whitespace: true
              }
            ]
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Description">
          {getFieldDecorator("description", {
            rules: [
              {
                required: true,
                message: "Please input description!",
                whitespace: true
              }
            ]
          })(<TextArea rows={4} />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            {pm.modelActionType === "edit" ? "Update" : "Add"}
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default Form.create()(observer(ActionModal));
