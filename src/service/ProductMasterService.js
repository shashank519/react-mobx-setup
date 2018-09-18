import masterService from "./MasterService";

const getProductList = () => {
  return masterService.get("productMasters");
};

const addProduct = data => {
  return masterService.post("add-product-master", data);
};

const updateProduct = data => {
  return masterService.put("update-product-master", data);
};

const deleteProduct = data => {
  return masterService.delete(`remove-product-master/${data}`);
};

export {
  getProductList as _getProductList,
  addProduct as _addProduct,
  updateProduct as _updateProduct,
  deleteProduct as _deleteProduct
};
