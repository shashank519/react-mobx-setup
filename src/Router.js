import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import CustomerRoutes from "./modules/customer/Routes";
import AdminRoutes from "./modules/admin/Routes";
// import Login from "./modules/login";
// import Dashboard from "./modules/dashboard";
// import ProtectedRoute from "./hoc/Auth";

const Routes = () => {
  return (
    <main>
      <Router>
        <Switch>
          <Route exact path="/" component={CustomerRoutes} />
          <Route path="/admin" component={AdminRoutes} />
        </Switch>
      </Router>
    </main>
  );
};

export default Routes;
