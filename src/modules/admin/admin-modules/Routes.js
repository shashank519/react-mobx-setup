import React from "react";
import { Switch, Route } from "react-router-dom";
import DashboardRoutes from "./dashboard/Routes";
import ElementRoutes from "./elements/Routes";
import SettingsRoutes from "./settings/Routes";
import MainLayout from "Hoc/main-layout/MainLayout";

const AdminLoggedInRoutes = () => {
  return (
    <MainLayout>
      <Switch>
        <Route path="/admin/dashboard" component={DashboardRoutes} />
        <Route path="/admin/elements" component={ElementRoutes} />
        <Route path="/admin/settings" component={SettingsRoutes} />
      </Switch>
    </MainLayout>
  );
};

export default AdminLoggedInRoutes;
