import { observable } from "mobx";
import { message } from "antd";
const brandService = require("./../../../../../service/ElementsService");
const categoryService = require("./../../../../../service/CategoryService");
const service = require("./../../../../../service/ProductMasterService");

class ProductPM {
  @observable
  isModalVisible = false;
  @observable
  formRef = "";
  @observable
  modelActionType = "";
  @observable
  isFetching = true;
  @observable
  brandsList = [];
  @observable
  categoryList = [];
  @observable
  productsMastersList = [];
  @observable
  selectedProduct = null;

  fetch() {
    service
      ._getProductList()
      .then(res => {
        this.productsMastersList = res;
        this.isFetching = false;
      })
      .catch(err => message.error("Failed to fetch records"));
  }

  toggleModal = (rowData, type) => {
    if (type === "edit") {
      this.selectedProduct = rowData;
      this.modelActionType = "edit";
    }
    brandService
      ._getBrandList()
      .then(res => {
        this.brandsList = res;
        return categoryService._getCategoryList();
      })
      .then(resp => {
        this.categoryList = resp;
      })
      .catch(error => message.error("Failed to fetch"));

    this.isModalVisible = !this.isModalVisible;
  };

  submitHandle = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        let brand = this.brandsList.find(
          value => value.brandId === values.brand
        );
        values.brand = brand;
        let category = this.categoryList.find(
          value => value.categoryId === values.category
        );
        values.category = category;

        if (!this.selectedProduct) {
          service
            ._addProduct(values)
            .then(res => {
              if (res && res.length) {
                this.productsMastersList = res;
                message.success("Data saved successfully");
              }
            })
            .catch(err => {
              message.error("Failed to save data");
            });
        } else {
          values.productMasterId = this.selectedProduct.productMasterId;
          service
            ._updateProduct(values)
            .then(res => {
              if (res && res.length) {
                this.productsMastersList = res || [];
                message.success("Data updated successfully");
              }
            })
            .catch(error => message.error("Failed to update data"));
        }
        form.resetFields();
        this.isModalVisible = !this.isModalVisible;
        this.selectedProduct = null;
      }
    });
  };

  removeProductMaster = data => {
    service
      ._deleteProduct(data.productMasterId)
      .then(res => {
        if (res && res.length) {
          this.productsMastersList = res || [];
          message.success("Data deleted successfully");
        }
      })
      .catch(error => message.error("Failed to delete data"));
  };

  onCancel = form => {
    this.selectedProduct = undefined;
    this.modelActionType = "";
    form.resetFields();
    this.isModalVisible = !this.isModalVisible;
  };
}

export default ProductPM;
