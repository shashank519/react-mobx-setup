import { observable } from "mobx";
import { message } from "antd";

const service = require("./../../../../../service/CategoryService");

export default class CategoryPM {
  @observable
  title = "title";
  @observable
  isModalVisible = false;
  @observable
  formRef = "";
  @observable
  modelActionType = "";
  @observable
  categoryList = [];
  @observable
  seletedCategory = undefined;
  @observable
  isFetching = true;

  fetch() {
    service
      ._getCategorysList()
      .then(res => {
        this.categoryList = res;
        this.isFetching = false;
      })
      .catch(error => message.error("Failed to fetch records"));
  }

  toggleModal = (rowData, type) => {
    if (type === "edit") {
      this.seletedCategory = rowData;
      this.modelActionType = "edit";
    }
    this.isModalVisible = !this.isModalVisible;
  };

  submitHandle = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        if (!this.seletedCategory) {
          service
            ._addCategory(values)
            .then(res => {
              if (res && res.length) {
                this.categoryList = res;
                message.success("Data saved successfully");
              }
            })
            .catch(err => {
              message.error("Failed to save data");
            });
        } else {
          service
            ._updateCategory(values)
            .then(res => {
              this.categoryList = res;
              message.success("Data updated successfully");
              this.seletedCategory = undefined;
            })
            .catch(error => message.error("Failed to update data"));
        }
        form.resetFields();
        this.isModalVisible = !this.isModalVisible;
        this.seletedCategory = undefined;
      }
    });
  };

  onDelete = categoryId => {
    service
      ._deleteCategory(categoryId)
      .then(res => {
        if (res && res.length) {
          this.categoryList = res;
          message.success("Data deleted successfully");
        }
      })
      .catch(err => message.error("Failed to delete data"));
  };

  onCancel = form => {
    this.seletedCategory = undefined;
    this.modelActionType = "";
    form.resetFields();
    this.isModalVisible = !this.isModalVisible;
  };
}
