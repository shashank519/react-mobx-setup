import React from "react";
import { Switch, Route } from "react-router-dom";
import Cart from "./cart";

const AdminRoutes = () => {
  return (
    <main>
      <Switch>
        <Route path="/" component={Cart} />
      </Switch>
    </main>
  );
};

export default AdminRoutes;
