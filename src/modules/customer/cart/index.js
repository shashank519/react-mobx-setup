import React from "react";
import { withRouter } from "react-router";
import { observer } from "mobx-react";

const Cart = () => {
  return (
    <React.Fragment>
      <div>Cart Page</div>
    </React.Fragment>
  );
};

export default withRouter(observer(Cart));
