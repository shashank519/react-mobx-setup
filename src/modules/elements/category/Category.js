import React from "react";
import { withRouter } from "react-router";
import { observer } from "mobx-react";

const Category = () => {
  return (
    <div>
      <h1>Category page</h1>
    </div>
  );
};

export default withRouter(observer(Category));
