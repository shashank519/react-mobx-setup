import React from "react";
import { Switch, Route } from "react-router-dom";
import Loadable from "react-loadable";

const ChangePasswordChunk = Loadable({
  loader: () => import("./changePassword/ChangePassword"),
  loading: () => null
});

const RolesChunk = Loadable({
  loader: () => import("./roles/Roles"),
  loading: () => null
});

const Routes = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route
          path="/settings/change-password"
          component={ChangePasswordChunk}
        />
        <Route path="/settings/roles" component={RolesChunk} />
      </Switch>
    </React.Fragment>
  );
};

export default Routes;
