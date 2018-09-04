import React from "react";
import { withRouter } from "react-router";
import { observer } from "mobx-react";

const Products = () => {
  return (
    <div>
      <h1>Products page</h1>
    </div>
  );
};

export default withRouter(observer(Products));
