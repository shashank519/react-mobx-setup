import { observable } from "mobx";
import { message } from "antd";

const service = require("./../../../../../service/ProductService");
const unitService = require("./../../../../../service/UnitService");
const productMasterService = require("./../../../../../service/ProductMasterService");

class ProductPM {
  @observable
  isModalVisible = false;
  @observable
  formRef = "";
  @observable
  modelActionType = "";
  @observable
  productsList = [];
  @observable
  productMasterList = [];
  @observable
  unitList = [];
  @observable
  selectedProduct = undefined;

  fetch() {
    service
      ._getProductsList()
      .then(res => {
        this.productsList = res;
        this.isFetching = false;
      })
      .catch(error => message.error("Failed to fetch records"));
  }

  toggleModal = (rowData, type) => {
    if (type === "edit") {
      this.selectedProduct = rowData;
      this.modelActionType = "edit";
    }
    productMasterService
      ._getProductList()
      .then(resp => (this.productMasterList = resp))
      .catch(err => message.error("Failed to fetch record"));
    unitService
      ._getUnitList()
      .then(resp => (this.unitList = resp))
      .catch(error => message.error("Failed to fetch records"));
    this.isModalVisible = !this.isModalVisible;
  };

  submitHandle = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        let productMaster = this.productMasterList.find(
          productMaster =>
            productMaster.productMasterId === values.productMasterId
        );
        let unit = this.unitList.find(unit => unit.unitId === values.unitId);
        values.unit = unit;
        values.productMaster = productMaster;
        if (!this.selectedProduct) {
          service
            ._addProduct(values)
            .then(res => {
              if (res && res.length) {
                this.productsList = res;
                message.success("Data saved successfully");
              }
            })
            .catch(err => {
              message.error("Failed to save data");
            });
        } else {
          service
            ._updateProduct(values)
            .then(res => {
              this.productsList = res;
              message.success("Data updated successfully");
              this.seletedCategory = undefined;
            })
            .catch(error => message.error("Failed to update data"));
          console.log("values", values);
          form.resetFields();
          this.isModalVisible = !this.isModalVisible;
        }
      }
    });
  };
}

export default ProductPM;
