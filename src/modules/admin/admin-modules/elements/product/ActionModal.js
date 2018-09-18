import React from "react";
import { observer } from "mobx-react";
import { Modal, Form, Input, Button, Select } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;
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
      visible={props.isModalVisible}
      onCancel={props.toggleModal}
      footer={null}
    >
      <Form onSubmit={e => props.submitHandle(e, props.form)}>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator("productName", {
            rules: [
              {
                required: true,
                message: "Please input product name!",
                whitespace: true
              }
            ],
            initialValue:
              props.selectedProduct && props.selectedProduct.productName
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Product Code">
          {getFieldDecorator("productCode", {
            rules: [
              {
                required: true,
                message: "Please enter code!",
                whitespace: true
              }
            ],
            initialValue:
              props.selectedProduct && props.selectedProduct.productCode
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Product Master">
          {getFieldDecorator("productMasterId", {
            rules: [
              {
                required: true,
                message: "Please select productMaster!"
              }
            ],
            initialValue: props.selectedProduct
              ? props.selectedProduct.productMaster.productMasterId
              : undefined
          })(
            <Select
              style={{ width: "100%" }}
              placeholder="Select Product Master!"
            >
              {props.productMasterList.map((val, key) => {
                return (
                  <Option value={val.productMasterId} key={val.productMasterId}>
                    {val.productMasterName}
                  </Option>
                );
              })}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Unit">
          {getFieldDecorator("unitId", {
            rules: [
              {
                required: true,
                message: "Please select Unit!"
              }
            ],
            initialValue: props.selectedProduct
              ? props.selectedProduct.units &&
                props.selectedProduct.units.unitId
              : undefined
          })(
            <Select style={{ width: "100%" }} placeholder="Select Unit!">
              {props.unitList.map((val, key) => {
                return (
                  <Option value={val.unitId} key={val.unitId}>
                    {val.title}
                  </Option>
                );
              })}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Description">
          {getFieldDecorator("description", {
            initialValue:
              props.selectedProduct && props.selectedProduct.description
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
