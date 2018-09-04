import { observable } from "mobx";

class Store {
  @observable
  isModalVisible = false;
  @observable
  currRowData = {};

  toggleModal = rowData => {
    this.currRowData = rowData;
    this.isModalVisible = !this.isModalVisible;
  };

  // submitHandle = e => {
  //   e.preventDefault();
  //   this.props.form.validateFields((err, values) => {
  //     if (!err) {
  //       console.log("Received values of form: ", values);
  //     }
  //   });
  // };
}

export default new Store();
