import { observable } from "mobx";

class ManufacturerPM {
  @observable
  isModalVisible = false;
  @observable
  formRef = "";
  @observable
  modelActionType = "";
  @observable
  manufacturarsList = [
    {
      key: "0",
      name: "Mike",
      description: 32,
      createdAt: "10 Downing Street",
      updatedAt: "10 Downing Street"
    },
    {
      key: "1",
      name: "John",
      description: 42,
      createdAt: "10 Downing Street",
      updatedAt: "10 Downing Street"
    }
  ];

  toggleModal = (rowData, type) => {
    this.modelActionType = type;
    const {
      props: { form }
    } = this.formRef;
    if (type === "edit") {
      form.setFieldsValue({
        name: rowData.name,
        description: rowData.description
      });
    } else {
      form.resetFields();
    }
    this.isModalVisible = !this.isModalVisible;
  };

  submitHandle = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        values = { ...values, key: Math.random() };
        this.manufacturarsList = [...this.manufacturarsList, values];
        form.resetFields();
        this.isModalVisible = !this.isModalVisible;
      }
    });
  };

  saveFormRef = formRef => {
    this.formRef = formRef;
  };
}

export default new ManufacturerPM();
