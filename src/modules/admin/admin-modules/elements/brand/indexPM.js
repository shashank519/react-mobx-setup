import { observable } from "mobx";
import { message } from "antd";

const service = require("./../../../../../service/ElementsService");

export default class BrandPM {
  @observable
  title = "title";
  @observable
  isModalVisible = false;
  @observable
  modelActionType = "";
  @observable
  brandsList = [];
  @observable
  isFetching = true;
  @observable
  manufacturarsList = [];
  @observable
  seletedBrand = undefined;

  fetch() {
    service
      ._getBrandList()
      .then(res => {
        this.brandsList = res;
        this.isFetching = false;
      })
      .catch(error => message.error("Failed to fetch records"));
  }

  toggleModal = (rowData, type) => {
    if (type === "edit") {
      this.seletedBrand = rowData;
      this.modelActionType = "edit";
    }
    if (!this.isModalVisible) {
      service
        ._getManufacturersList()
        .then(res => {
          this.manufacturarsList = res;
        })
        .catch(error => message.error("Failed to fetch manufacturer record"));
    }
    this.isModalVisible = !this.isModalVisible;
  };

  submitHandle = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        let manufacturer = this.manufacturarsList.find(
          manufacturer => manufacturer.manufacturerId === values.manufacturerId
        );
        values.manufacturer = manufacturer;
        if (!this.seletedBrand) {
          service
            ._addBrand(values)
            .then(res => {
              if (res && res.length) {
                this.brandsList = res;
                message.success("Data saved successfully");
              }
            })
            .catch(err => {
              message.error("Failed to save data");
            });
        } else {
          values.brandId = this.seletedBrand.brandId;
          service
            ._updateBrand(values)
            .then(res => {
              this.brandsList = res;
              message.success("Data updated successfully");
              this.seletedBrand = undefined;
            })
            .catch(error => message.error("Failed to update data"));
        }
        form.resetFields();
        this.isModalVisible = !this.isModalVisible;
        this.seletedBrand = undefined;
      }
    });
  };

  onDelete = brandId => {
    service
      ._deleteBrand(brandId)
      .then(res => {
        if (res && res.length) {
          this.brandsList = res;
          message.success("Data deleted successfully");
        }
      })
      .catch(err => message.error("Failed to delete data"));
  };

  onCancel = form => {
    this.seletedBrand = undefined;
    this.modelActionType = "";
    form.resetFields();
    this.isModalVisible = !this.isModalVisible;
  };
}
