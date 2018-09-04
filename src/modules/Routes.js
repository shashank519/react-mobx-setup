import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardRoutes from "./dashboard/Routes";
import ElementRoutes from "./elements/Routes";
import SettingsRoutes from "./settings/Routes";
import MainLayout from "./../hoc/main-layout/MainLayout";

const Routes = () => (
  <MainLayout>
    <Switch>
      <Route path="/dashboard" component={DashboardRoutes} />
      <Route path="/elements" component={ElementRoutes} />
      <Route path="/settings" component={SettingsRoutes} />
    </Switch>
  </MainLayout>
);

export default Routes;
