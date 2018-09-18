import { observable } from "mobx";
import { message } from "antd";

const service = require("./../../../../../service/ManufacturerService");

class ManufacturerPM {
  @observable
  isModalVisible = false;
  @observable
  modelActionType = "";
  @observable
  isFetching = true;
  @observable
  manufacturersList = [];
  @observable
  seletedManufacturer = undefined;

  fetch() {
    service
      ._getManufacturersList()
      .then(res => {
        this.manufacturersList = res;
        this.isFetching = false;
      })
      .catch(error => message.error("Failed to fetch records"));
  }

  toggleModal = (rowData, type) => {
    if (type === "edit") {
      this.seletedManufacturer = rowData;
      this.modelActionType = "edit";
    }
    this.isModalVisible = !this.isModalVisible;
  };

  submitHandle = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        if (!this.seletedManufacturer) {
          service
            ._addManufacturer(values)
            .then(res => {
              if (res && res.length) {
                this.manufacturersList = res;
                message.success("Data saved successfully");
              }
            })
            .catch(err => {
              message.error("Failed to save data");
            });
        } else {
          service
            ._updateManufacturer(values)
            .then(res => {
              this.manufacturersList = res;
              message.success("Data updated successfully");
              this.seletedManufacturer = undefined;
              this.modelActionType = "";
            })
            .catch(error => message.error("Failed to update data"));
        }
        form.resetFields();
        this.isModalVisible = !this.isModalVisible;
        this.seletedManufacturer = undefined;
      }
    });
  };
  onDelete = manufacturerId => {
    service
      ._deleteManufacturer(manufacturerId)
      .then(res => {
        if (res && res.length) {
          this.manufacturersList = res;
          message.success("Data deleted successfully");
        }
      })
      .catch(err => message.error("Failed to delete data"));
  };

  onCancel = form => {
    this.seletedManufacturer = undefined;
    this.modelActionType = "";
    form.resetFields();
    this.isModalVisible = !this.isModalVisible;
  };
}

export default ManufacturerPM;
