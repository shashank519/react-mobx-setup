import React from "react";
import { observer } from "mobx-react";
import { Modal, Form, Input, Button, Select } from "antd";

const FormItem = Form.Item;
const Option = Select.Option;

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
      title="Product Master Add"
      visible={props.isModalVisible}
      onCancel={() => props.onCancel(props.form)}
      footer={null}
    >
      <Form onSubmit={e => props.submitHandle(e, props.form)}>
        <FormItem {...formItemLayout} label="Product Name">
          {getFieldDecorator("productMasterName", {
            rules: [
              {
                required: true,
                message: "Please input product master name!",
                whitespace: true
              }
            ],
            initialValue: props.selectedProduct
              ? props.selectedProduct.productMasterName
              : undefined
          })(<Input placeholder="Product Master Name" />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Brand">
          {getFieldDecorator("brand", {
            rules: [
              {
                required: true,
                message: "Please select brand!"
              }
            ],
            initialValue: props.selectedProduct
              ? props.selectedProduct.brand.brandId
              : undefined
          })(
            <Select style={{ width: "100%" }} placeholder="Select Brand!">
              {props.brandsList.map((val, key) => {
                return (
                  <Option value={val.brandId} key={val.brandId}>
                    {val.brandName}
                  </Option>
                );
              })}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Category">
          {getFieldDecorator("category", {
            rules: [
              {
                required: true,
                message: "Please select category!"
              }
            ],
            initialValue: props.selectedProduct
              ? props.selectedProduct.category.categoryId
              : undefined
          })(
            <Select style={{ width: "100%" }} placeholder="Select Category!">
              {props.categoryList.map((val, key) => {
                return (
                  <Option value={val.categoryId} key={val.categoryId}>
                    {val.categoryName}
                  </Option>
                );
              })}
            </Select>
          )}
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
