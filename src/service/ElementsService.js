import masterService from "./MasterService";

const getBrandList = () => {
  return masterService.get("brands");
};

const getManufacturersList = () => {
  return masterService.get("manufacturers");
};

const addBrand = data => {
  return masterService.post("add-brand", data);
};

const updateBrand = data => {
  return masterService.put("update-brand", data);
};

const deleteBrand = data => {
  return masterService.delete(`remove-brand/${data}`);
};

export {
  getBrandList as _getBrandList,
  getManufacturersList as _getManufacturersList,
  addBrand as _addBrand,
  updateBrand as _updateBrand,
  deleteBrand as _deleteBrand
};
