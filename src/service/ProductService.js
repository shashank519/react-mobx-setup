import masterService from "./MasterService";

const getProductsList = () => {
  return masterService.get("products");
};

const addProduct = data => {
  return masterService.post("add-product", data);
};

const updateProduct = data => {
  return masterService.put("update-product", data);
};

const deleteProduct = data => {
  return masterService.delete(`remove-product/${data}`);
};

export {
  getProductsList as _getProductsList,
  addProduct as _addProduct,
  updateProduct as _updateProduct,
  deleteProduct as _deleteProduct
};
