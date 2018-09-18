import React from "react";
import { observer } from "mobx-react";
import { Modal, Form, Input, Button } from "antd";

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
      title="Manufacturer's"
      visible={props.isModalVisible}
      onCancel={() => props.onCancel(props.form)}
      footer={null}
    >
      <Form onSubmit={e => props.submitHandle(e, props.form)}>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator("manufacturerName", {
            rules: [
              {
                required: true,
                message: "Please input your name!",
                whitespace: true
              }
            ],
            initialValue:
              props.seletedManufacturer &&
              props.seletedManufacturer.manufacturerName
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
            ],
            initialValue:
              props.seletedManufacturer && props.seletedManufacturer.description
          })(<TextArea rows={4} />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit">
            {props.modelActionType === "edit" ? "Update" : "Add"}
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default Form.create()(observer(ActionModal));
