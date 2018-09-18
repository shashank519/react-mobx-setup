import masterService from "./MasterService";

const getManufacturersList = () => {
  return masterService.get("manufacturers");
};

const addManufacturer = data => {
  return masterService.post("add-manufacturer", data);
};

const updateManufacturer = data => {
  return masterService.put("update-manufacturer", data);
};

const deleteManufacturer = data => {
  return masterService.delete(`remove-manufacturer/${data}`);
};

export {
  getManufacturersList as _getManufacturersList,
  addManufacturer as _addManufacturer,
  updateManufacturer as _updateManufacturer,
  deleteManufacturer as _deleteManufacturer
};
