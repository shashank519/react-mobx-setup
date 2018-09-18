import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

const DashboardChunk = Loadable({
  loader: () => import("./index"),
  loading: () => null
});

const Routes = () => {
  return (
    <Switch>
      <Route path="/" component={DashboardChunk} />
    </Switch>
  );
};

export default Routes;
