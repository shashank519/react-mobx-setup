import React from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
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
      title="Brand's"
      visible={props.isModalVisible}
      onCancel={() => props.onCancel(props.form)}
      footer={null}
    >
      <Form onSubmit={e => props.submitHandle(e, props.form)}>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator("brandName", {
            rules: [
              {
                required: true,
                message: "Please input your name!",
                whitespace: true
              }
            ],
            initialValue: props.seletedBrand && props.seletedBrand.brandName
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Manufacturer">
          {getFieldDecorator("manufacturerId", {
            rules: [
              {
                required: true,
                message: "Please input description!"
              }
            ],
            initialValue:
              props.seletedBrand &&
              props.seletedBrand.manufacturer.manufacturerId
          })(
            <Select>
              {props.manufacturarsList &&
                toJS(props.manufacturarsList).map(manufacturer => (
                  <Option
                    key={manufacturer.manufacturerId}
                    value={manufacturer.manufacturerId}
                  >
                    {manufacturer.manufacturerName}
                  </Option>
                ))}
            </Select>
          )}
        </FormItem>
        <FormItem {...tailFormItemLayout}>
          <Button type="primary" htmlType="submit" style={{ float: "right" }}>
            {props.modelActionType === "edit" ? "Update" : "Add"}
          </Button>
        </FormItem>
      </Form>
    </Modal>
  );
};

export default Form.create()(observer(ActionModal));
