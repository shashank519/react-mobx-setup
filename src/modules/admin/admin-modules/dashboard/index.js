import React from "react";
import { withRouter } from "react-router";
import { observer } from "mobx-react";

const Dashboard = () => {
  return (
    <React.Fragment>
      <div>Dashboard</div>
    </React.Fragment>
  );
};

export default withRouter(observer(Dashboard));
