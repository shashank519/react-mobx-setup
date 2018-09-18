import React from "react";
import { observer } from "mobx-react";
import { Modal, Form, Input, Button } from "antd";

const FormItem = Form.Item;

const ActionModal = props => {
  const { getFieldDecorator } = props.form;

  const formItemLayout = {
    labelCol: { xs: { span: 24 }, sm: { span: 6 } },
    wrapperCol: { xs: { span: 24 }, sm: { span: 18 } }
  };
  const tailFormItemLayout = {
    wrapperCol: { xs: { span: 24, offset: 0 }, sm: { span: 16, offset: 8 } }
  };
  return (
    <Modal
      title="Add Unit"
      visible={props.isModalVisible}
      onCancel={() => props.onCancel(props.form)}
      footer={null}
    >
      <Form onSubmit={e => props.submitHandle(e, props.form)}>
        <FormItem {...formItemLayout} label="Title">
          {getFieldDecorator("title", {
            rules: [
              {
                required: true,
                message: "Please input title!",
                whitespace: true
              }
            ],
            initialValue: props.selectedUnit
              ? props.selectedUnit.title
              : undefined
          })(<Input placeholder="Unit title!" />)}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{ float: "right" }}>
            {props.modelActionType === "edit" ? "Update" : "Submit"}
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default Form.create()(observer(ActionModal));
