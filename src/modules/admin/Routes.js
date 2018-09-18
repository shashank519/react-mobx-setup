import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./login";
import AdminLoggedInRoutes from "./admin-modules/Routes";
// import Dashboard from "./modules/dashboard";
// import ProtectedRoute from "./hoc/Auth";

const AdminRoutes = () => {
  let isLoggedIn = true;

  return (
    <main>
      <Router>
        {isLoggedIn ? (
          <Switch>
            <Route path="/admin" component={AdminLoggedInRoutes} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/admin" component={Login} />
            <Route path="/admin/login" component={Login} />
          </Switch>
        )}
      </Router>
    </main>
  );
};

export default AdminRoutes;
