import React from "react";
import { observer } from "mobx-react";
import { toJS } from "mobx";
import { Modal, Form, Input, Button, Select } from "antd";

const FormItem = Form.Item;
const { TextArea } = Input;
const Option = Select.Option;

const ActionModal = props => {
  console.log("props", props);

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
      title="Category's"
      visible={props.isModalVisible}
      onCancel={props.toggleModal}
      footer={null}
    >
      <Form onSubmit={e => props.submitHandle(e, props.form)}>
        <FormItem {...formItemLayout} label="Name">
          {getFieldDecorator("categoryName", {
            rules: [
              {
                required: true,
                message: "Please input your name!",
                whitespace: true
              }
            ],
            initialValue:
              props.seletedCategory && props.seletedCategory.categoryName
          })(<Input />)}
        </FormItem>
        <FormItem {...formItemLayout} label="Category">
          {getFieldDecorator("categoryParentId", {
            initialValue:
              props.seletedCategory && props.seletedCategory.categoryId
          })(
            <Select>
              {props.categoryList &&
                toJS(props.categoryList).map(category => (
                  <Option key={category.categoryId} value={category.categoryId}>
                    {category.categoryName}
                  </Option>
                ))}
            </Select>
          )}
        </FormItem>
        <FormItem {...formItemLayout} label="Description">
          {getFieldDecorator("description", {
            initialValue:
              props.seletedCategory && props.seletedCategory.description
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
