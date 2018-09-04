import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Login from "./modules/login";
// import Dashboard from "./modules/dashboard";
import ModuleRoutes from "./modules/Routes";
import ProtectedRoute from "./hoc/Auth";

const Routes = () => {
  let isLoggedIn = true;

  return (
    <main>
      <Router>
        {isLoggedIn ? (
          <Switch>
            <Route path="/" component={ModuleRoutes} />
          </Switch>
        ) : (
          <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/login" component={Login} />
          </Switch>
        )}
      </Router>
    </main>
  );
};

export default Routes;
