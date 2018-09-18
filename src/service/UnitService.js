import masterService from "./MasterService";

const getUnitList = () => {
  return masterService.get("units");
};

const addUnit = data => {
  return masterService.post("add-unit", data);
};

const updateUnit = data => {
  return masterService.put("update-unit", data);
};

const deleteUnit = data => {
  return masterService.delete(`remove-unit/${data}`);
};

export {
  getUnitList as _getUnitList,
  addUnit as _addUnit,
  updateUnit as _updateUnit,
  deleteUnit as _deleteUnit
};
