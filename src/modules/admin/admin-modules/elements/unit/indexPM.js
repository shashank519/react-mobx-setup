import { observable } from "mobx";
import { message } from "antd";

const service = require("./../../../../../service/UnitService");

export default class BrandPM {
  @observable
  title = "title";
  @observable
  isModalVisible = false;
  @observable
  formRef = "";
  @observable
  modelActionType = "";
  @observable
  unitsList = [];
  @observable
  isFetching = true;
  @observable
  selectedUnit = undefined;

  fetch() {
    service
      ._getUnitList()
      .then(res => {
        this.unitsList = res;
        this.isFetching = false;
      })
      .catch(error => {
        message.error("Failed to fetch records");
        this.isFetching = false;
      });
  }

  toggleModal = (rowData, type) => {
    if (type === "edit") {
      this.selectedUnit = rowData;
      this.modelActionType = "edit";
    }
    console.log(this.selectedUnit);
    this.isModalVisible = !this.isModalVisible;
  };

  submitHandle = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        if (!this.selectedUnit) {
          service
            ._addUnit(values)
            .then(res => {
              if (res && res.length) {
                this.unitsList = res;
                message.success("Data saved successfully");
              }
            })
            .catch(err => {
              message.error("Failed to save data");
            });
        } else {
          values.unitId = this.selectedUnit.unitId;
          service
            ._updateUnit(values)
            .then(res => {
              this.unitsList = res;
              message.success("Data updated successfully");
              this.selectedUnit = undefined;
            })
            .catch(error => message.error("Failed to update data"));
        }
        form.resetFields();
        this.isModalVisible = !this.isModalVisible;
        this.selectedUnit = undefined;
      }
    });
  };

  onDelete = unitId => {
    service
      ._deleteUnit(unitId)
      .then(res => {
        if (res && res.length) {
          this.unitsList = res;
          message.success("Data deleted successfully");
        }
      })
      .catch(err => message.error("Failed to delete data"));
  };

  onCancel = form => {
    this.selectedUnit = undefined;
    this.modelActionType = "";
    form.resetFields();
    this.isModalVisible = !this.isModalVisible;
  };
}
