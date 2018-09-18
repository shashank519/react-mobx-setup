import masterService from "./MasterService";

const getCategorysList = () => {
  return masterService.get("categorys");
};

const addCategory = data => {
  return masterService.post("add-category", data);
};

const updateCategory = data => {
  return masterService.put("update-category", data);
};

const deleteCategory = data => {
  return masterService.delete(`remove-category/${data}`);
};

export {
  getCategorysList as _getCategorysList,
  addCategory as _addCategory,
  updateCategory as _updateCategory,
  deleteCategory as _deleteCategory
};
